// test advent-18.js

const { dryNumber } = require('./advent-18')

test('Test 1', () => {
  expect(dryNumber(1, 15)).toStrictEqual([1, 10, 11, 12, 13, 14, 15])
})

test('Test 2', () => {
  expect(dryNumber(2, 20)).toStrictEqual([2, 12, 20])
})

test('Test 3', () => {
  expect(dryNumber(3, 30)).toStrictEqual([3, 13, 23, 30])
})
