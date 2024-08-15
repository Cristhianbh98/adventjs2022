// advent-5.test.js
const { getMaxGifts } = require('./advent-5')

test('Advent 5 | Test 1', () => {
  const giftsCities = [12, 3, 11, 5, 7]
  const maxGifts = 20
  const maxCities = 3

  expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toBe(20)
})

test('Advent 5 | Test 2', () => {
  expect(getMaxGifts([50], 15, 1)).toBe(0)
})

test('Advent 5 | Test 3', () => {
  expect(getMaxGifts([50, 70], 100, 1)).toBe(70)
})

test('Advent 5 | Test 4', () => {
  expect(getMaxGifts([50, 70, 30], 100, 2)).toBe(100)
})

test('Advent 5 | Test 5', () => {
  expect(getMaxGifts([50, 70, 30], 100, 3)).toBe(100)
})
