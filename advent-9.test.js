// test advent-9.js

const { countTime } = require('./advent-9.js')

test('Test advent 9 | 1', () => {
  expect(countTime([0, 1, 1, 0, 1])).toBe(7)
})

test('Test advent 9 | 1', () => {
  expect(countTime([0, 0, 0, 1])).toBe(21)
})

test('Test advent 9 | 1', () => {
  expect(countTime([0, 0, 1, 0, 0])).toBe(28)
})
