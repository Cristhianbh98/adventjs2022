// advent-1.test.js

const { wrapping } = require('./advent-1')

test('Advent 1 | Test 1', () => {
  const gifts = ['book', 'game', 'socks']

  expect(wrapping(gifts)).toEqual([
    '******\n*book*\n******',
    '******\n*game*\n******',
    '*******\n*socks*\n*******'
  ])
})

test('Advent 1 | Test 2', () => {
  const gifts = ['cat', 'game', 'socks']

  expect(wrapping(gifts)).toEqual([
    '*****\n*cat*\n*****',
    '******\n*game*\n******',
    '*******\n*socks*\n*******'
  ])
})
