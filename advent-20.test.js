// test advent-20.js

const { howManyReindeers } = require('./advent-20')

test('Test is array', () => {
  expect(Array.isArray(howManyReindeers([], []))).toBe(true)
})

test('Test', () => {
  const reindeerTypes = [
    { type: 'Nuclear', weightCapacity: 50 },
    { type: 'Electric', weightCapacity: 10 },
    { type: 'Gasoline', weightCapacity: 5 },
    { type: 'Diesel', weightCapacity: 1 }
  ]

  const gifts = [
    { country: 'Spain', weight: 30 },
    { country: 'France', weight: 17 },
    { country: 'Italy', weight: 50 },
    { country: 'Ecuador', weight: 15 }
  ]

  expect(howManyReindeers(reindeerTypes, gifts))
    .toStrictEqual([{
      country: 'Spain',
      reindeers: [
        { type: 'Electric', num: 1 },
        { type: 'Gasoline', num: 3 },
        { type: 'Diesel', num: 5 }
      ]
    }, {
      country: 'France',
      reindeers: [
        { type: 'Electric', num: 1 },
        { type: 'Gasoline', num: 1 },
        { type: 'Diesel', num: 2 }
      ]
    }, {
      country: 'Italy',
      reindeers: [
        { type: 'Electric', num: 3 },
        { type: 'Gasoline', num: 3 },
        { type: 'Diesel', num: 5 }
      ]
    }, {
      country: 'Ecuador',
      reindeers: [
        { type: 'Gasoline', num: 2 },
        { type: 'Diesel', num: 5 }
      ]
    }])
})
