// test advent-10.js

const { checkJump } = require('./advent-10')

test('Advent 10 - checkJump', () => {
  expect(checkJump([1, 3, 8, 5, 2])).toBe(true)
})

test('Advent 10 - checkJump', () => {
  expect(checkJump([1, 7, 3, 5])).toBe(false)
})

test('Advent 10 - checkJump', () => {
  expect(checkJump([1, 2, 1])).toBe(true)
})

test('Advent 10 - checkJump', () => {
  expect(checkJump([1, 2, 3, 4, 5])).toBe(false)
})

test('Advent 10 - checkJump', () => {
  expect(checkJump([5, 4, 3])).toBe(false)
})
