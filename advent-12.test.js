const { selectSleigh } = require('./advent-12')

test('Test', () => {
  const distance = 30
  const sleighs = [
    { name: 'Gorusuke', consumption: 0.3 },
    { name: 'Madeval', consumption: 0.5 },
    { name: 'Lolivier', consumption: 0.7 },
    { name: 'Hyuuh', consumption: 1 }
  ]

  expect(selectSleigh(distance, sleighs))
    .toBe('Madeval')
})

test('Test', () => {
  const distance = 1
  const sleighs = [
    { name: 'pheralb', consumption: 0.3 },
    { name: 'TMChein', consumption: 0.5 }
  ]

  expect(selectSleigh(distance, sleighs))
    .toBe('TMChein')
})

test('Test', () => {
  const distance = 50
  const sleighs = [
    { name: 'Pedrosillano', consumption: 1 },
    { name: 'SamarJaffal', consumption: 2 },
    { name: 'marcospage', consumption: 3 }
  ]

  expect(selectSleigh(distance, sleighs))
    .toBe(null)
})
