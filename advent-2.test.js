// advent-2.test.js
const { countHours } = require('./advent-2')

test('Advent 2 | Test 1', () => {
  const year = 1985
  const holidays = ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']

  expect(countHours(year, holidays)).toBe(10)
})

test('Advent 2 | Test 2', () => {
  const year = 2022
  const holidays = ['01/06', '04/01', '12/25']
  expect(countHours(year, holidays)).toBe(4)
})
