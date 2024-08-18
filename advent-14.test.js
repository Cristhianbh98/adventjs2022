// test advent-14.js

const { getOptimalPath } = require('./advent-14')

test('Test 1', () => {
  const path = [
    [0],
    [7, 4],
    [2, 4, 6]
  ]
  expect(getOptimalPath(path)).toBe(8)
})

test('Test 2', () => {
  const path = [[0], [2, 3]]

  expect(getOptimalPath(path)).toBe(2)
})

test('Test 3', () => {
  const path = [[0], [3, 4], [9, 8, 1]]

  expect(getOptimalPath(path)).toBe(5)
})

test('Test 4', () => {
  const path = [[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]

  expect(getOptimalPath(path)).toBe(8)
})

test('Test 5', () => {
  const path = [[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1]]

  expect(getOptimalPath(path)).toBe(7)
})
