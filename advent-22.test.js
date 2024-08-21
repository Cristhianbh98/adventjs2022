// test advent-22.js

const { checkStepNumbers } = require('./advent-22.js')

test('Test typeof', () => {
  const systemNames = ['tree_1', 'tree_2', 'house']
  const stepNumbers = [1, 2, 3]
  expect(typeof checkStepNumbers(systemNames, stepNumbers)).toBe('boolean')
})

test('Test 1', () => {
  const systemNames = ['tree_1', 'tree_2', 'house', 'tree_1', 'tree_2', 'house']
  const stepNumbers = [1, 33, 10, 2, 44, 20]
  expect(checkStepNumbers(systemNames, stepNumbers)).toBe(true)
})

test('Test 2', () => {
  const systemNames = ['tree_1', 'tree_1', 'house']
  const stepNumbers = [2, 1, 10]
  expect(checkStepNumbers(systemNames, stepNumbers)).toBe(false)
})

test('Test 3', () => {
  const systemNames = ['tree_1', 'tree_1', 'house', 'tree_2', 'tree_1']
  const stepNumbers = [2, 5, 10, 1, 15]
  expect(checkStepNumbers(systemNames, stepNumbers)).toBe(true)
})
