/*
 * To not tire the reindeer, Papa Noel wants to leave the maximum number of gifts by making the least number of trips possible.
 * He has an array of cities where each element is the number of gifts he can leave there. For example, [12, 3, 11, 5, 7]. He also has a limit on the number of gifts that can fit in his bag, and finally, the maximum number of cities that his reindeer can visit.
 * As he doesn't want to leave a city half-way, if he can't leave all the gifts that are from that city, he doesn't leave any there.
 */

function getMaxGifts (giftsCities, maxGifts, maxCities) {
  giftsCities.sort((a, b) => b - a)

  let bestSum = 0
  let bestCities = []

  function findCities (currentCities, currentSum, startIndex) {
    if (currentCities.length > maxCities) return
    if (currentSum > maxGifts) return

    if (currentSum > bestSum) {
      bestSum = currentSum
      bestCities = [...currentCities]
    }

    for (let i = startIndex; i < giftsCities.length; i++) {
      const arr = [...currentCities, giftsCities[i]]
      const sum = currentSum + giftsCities[i]
      findCities(arr, sum, i + 1)
    }
  }

  findCities([], 0, 0)
  return bestSum
}

module.exports = { getMaxGifts }
