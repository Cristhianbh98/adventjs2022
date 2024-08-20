// test advent-17.js

const { carryGifts } = require('./advent-17')

test('Test', () => {
  const gifts = ['game', 'bike', 'book', 'toy']
  const maxWeight = 10

  expect(carryGifts(gifts, maxWeight)).toStrictEqual(['game bike', 'book toy'])
})

test('Test', () => {
  const gifts = ['game', 'bike', 'book', 'toy']
  const maxWeight = 7

  expect(carryGifts(gifts, maxWeight)).toStrictEqual(['game', 'bike', 'book toy'])
})

test('Test', () => {
  const gifts = ['game', 'bike', 'book', 'toy']
  const maxWeight = 4

  expect(carryGifts(gifts, maxWeight)).toStrictEqual(['game', 'bike', 'book', 'toy'])
})

test('Test', () => {
  const gifts = ['toy', 'gamme', 'toy', 'bike']
  const maxWeight = 6

  expect(carryGifts(gifts, maxWeight)).toStrictEqual(['toy', 'gamme', 'toy', 'bike'])
})

test('Test', () => {
  const gifts = ['toy', 'book', 'puzzle']
  const maxWeight = 8

  expect(carryGifts(gifts, maxWeight)).toStrictEqual(['toy book', 'puzzle'])
})

test('Test', () => {
  const gifts = ['toy', 'toy', 'toy', 'game']
  const maxWeight = 9
  expect(carryGifts(gifts, maxWeight)).toStrictEqual(['toy toy toy', 'game'])
})

test('Test', () => {
  const gifts = ['toy', 'toy', 'toy', 'toy']
  const maxWeight = 2
  expect(carryGifts(gifts, maxWeight)).toStrictEqual([])
})
