import assert from 'assert'

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

function distributeGifts(packOfGifts, reindeers) {
  const packOfGiftsWeight = packOfGifts.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.length
  }, 0)

  const reindeersWeight = reindeers.reduce((accumulator, currentValue) => {
    return accumulator + (currentValue.length * 2)
  }, 0)

  return Math.floor(reindeersWeight / packOfGiftsWeight)
}

try {
  assert.equal(distributeGifts(packOfGifts, reindeers), 2)
  console.log('✅ Test passed')
} catch(e) {
  console.log('❌ Test did not pass')
}
