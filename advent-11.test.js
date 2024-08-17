// test advent-11.js

const { getCompleted } = require('./advent-11')

test('Test 1', () => {
  expect(getCompleted('01:00:00', '03:00:00'))
    .toBe('1/3')
})

test('Test 2', () => {
  expect(getCompleted('01:00:00', '01:00:00'))
    .toBe('1/1')
})

test('Test 3', () => {
  expect(getCompleted('00:00:00', '00:00:00'))
    .toBe('1/1')
})

test('Test 4', () => {
  expect(getCompleted('02:00:00', '04:00:00'))
    .toBe('1/2')
})

test('Test 5', () => {
  expect(getCompleted('00:10:00', '01:00:00'))
    .toBe('1/6')
})

test('Test 6', () => {
  expect(getCompleted('01:10:10', '03:30:30'))
    .toBe('1/3')
})
