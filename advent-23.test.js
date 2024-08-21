// test advent-23.js

const { executeCommands } = require('./advent-23')

test('Test 1', () => {
  const commands = [
    'MOV 5,V00', // V00 is 5
    'MOV 10,V01', // V01 is 10
    'DEC V00', // V00 is now 4
    'ADD V00,V01' // V00 = V00 + V01 = 14
  ]
  expect(executeCommands(commands))
    .toStrictEqual([14, 10, 0, 0, 0, 0, 0, 0])
})

test('Test 2', () => {
  const commands = [
    'MOV 255,V00',
    'INC V00',
    'DEC V01',
    'DEC V01'
  ]

  expect(executeCommands(commands))
    .toStrictEqual([0, 254, 0, 0, 0, 0, 0, 0])
})

test('Test 3', () => {
  const commands = [
    'MOV 10,V00',
    'DEC V00',
    'INC V01',
    'JMP 1',
    'INC V06'
  ]

  expect(executeCommands(commands))
    .toStrictEqual([0, 10, 0, 0, 0, 0, 1, 0])
})
