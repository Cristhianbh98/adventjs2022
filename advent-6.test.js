const { createCube } = require('./advent-6')

test('Advent 6 - create cube of 1', () => {
  expect(createCube(1))
    .toBe('/\\_\\\n\\/_/')
})

test('Advent 6 - create cube of 2', () => {
  expect(createCube(2))
    .toBe(' /\\_\\_\\\n/\\/\\_\\_\\\n\\/\\/_/_/\n \\/_/_/')
})

test('Advent 6 - create cube of 3', () => {
  expect(createCube(3))
    .toBe('  /\\_\\_\\_\\\n /\\/\\_\\_\\_\\\n/\\/\\/\\_\\_\\_\\\n\\/\\/\\/_/_/_/\n \\/\\/_/_/_/\n  \\/_/_/_/')
})
