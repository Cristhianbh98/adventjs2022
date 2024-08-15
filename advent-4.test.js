const { fitsInOneBox } = require('./advent-4')

test('Advent 4 | Test 1', () => {
  expect(
    fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 }
    ])
  ).toBe(true)
})

test('Advent 4 | Test 2', () => {
  expect(
    fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 3, w: 1, h: 3 }
    ])
  ).toBe(false)
})

test('Advent 4 | Test 3', () => {
  expect(
    fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 }
    ])
  ).toBe(true)
})
