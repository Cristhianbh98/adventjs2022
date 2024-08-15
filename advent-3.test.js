const { distributeGifts } = require('./advent-3')

test('Advent 3 | Test 1', () => {
  const packOfGifts = ['book', 'doll', 'ball']
  const reindeers = ['dasher', 'dancer']

  expect(distributeGifts(packOfGifts, reindeers)).toBe(2)
})

test('Advent 3 | Test 2', () => {
  expect(distributeGifts(['a', 'b', 'c'], ['d', 'e']))
    .toBe(1)
})
