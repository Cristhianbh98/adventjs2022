// test advent-7.js

const { getGiftsToRefill } = require('./advent-7.js')

test('Advent 7 - Test 1', () => {
  const a1 = ['bike', 'car', 'bike', 'bike']
  const a2 = ['car', 'bike', 'doll', 'car']
  const a3 = ['bike', 'pc', 'pc']

  expect(getGiftsToRefill(a1, a2, a3))
    .toStrictEqual(['doll', 'pc'])
})
