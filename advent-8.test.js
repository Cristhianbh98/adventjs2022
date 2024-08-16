// test advent-8.js

const { checkPart } = require('./advent-8')

test('Advent 8 - uwu', () => {
  expect(checkPart('uwu')).toBe(true)
})

test('Advent 8 - owo', () => {
  expect(checkPart('owo')).toBe(true)
})

test('Advent 8 - miidim', () => {
  expect(checkPart('miidim')).toBe(true)
})

test('Advent 8 - midu', () => {
  expect(checkPart('midu')).toBe(false)
})
