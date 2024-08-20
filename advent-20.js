function howManyReindeers (reindeerTypes, gifts) {
  reindeerTypes.sort((a, b) => b.weightCapacity - a.weightCapacity)

  return gifts.map(gift => {
    const { weight } = gift
    const reindeers = []

    const validReindeers = reindeerTypes.filter(r => r.weightCapacity < weight)

    let remainingWeight = weight

    validReindeers.forEach((r, index) => {
      const totalCapacityOfRemaining = validReindeers.slice(index).reduce((acc, r) => acc + r.weightCapacity, 0)
      const numReindeers = Math.floor(remainingWeight / totalCapacityOfRemaining)
      reindeers.push({ type: r.type, num: numReindeers })

      remainingWeight -= numReindeers * r.weightCapacity
    })
    return {
      country: gift.country,
      reindeers: reindeers.filter(r => r.num > 0)
    }
  })
}

module.exports = { howManyReindeers }
