// test advent-24.js

const { canExit } = require('./advent-24')

test('canExit() returns true for a maze with an exit', () => {
  const maze = [
    [' ', ' ', 'W', ' ', 'S'],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'E']
  ]

  expect(canExit(maze)).toBe(true)
})

test('canExit() returns false for a maze without an exit', () => {
  const maze = [
    [' ', ' ', 'W', 'W', 'S'],
    [' ', ' ', ' ', 'W', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'E']
  ]

  expect(canExit(maze)).toBe(false)
})
