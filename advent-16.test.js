// tests for advent-16.js
const { fixLetter } = require('./advent-16')

test('Advent 16', () => {
  const message = ' hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  '
  expect(fixLetter(message)).toBe('Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.')
})

test('Advent 16', () => {
  const message = "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"
  expect(fixLetter(message)).toBe("Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?")
})

test('Advent 16', () => {
  const message = 'Hey Santa Claus. I want a bike. I want a videogame!'
  expect(fixLetter(message)).toBe('Hey Santa Claus. I want a bike. I want a videogame!')
})

test('Advent 16', () => {
  const message = '  hi    santa    claus '
  expect(fixLetter(message)).toBe('Hi Santa Claus.')
})

test('Advent 16', () => {
  const message = '  hi,santa claus. are you there ?   '
  expect(fixLetter(message)).toBe('Hi, Santa Claus. Are you there?')
})
