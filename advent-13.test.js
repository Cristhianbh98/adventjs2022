// test advent-13.js

const { getFilesToBackup } = require('./advent-13')

test('Test', () => {
  const lastBackup = 1546300800

  const changes = [
    [3, 1546301100],
    [2, 1546300800],
    [1, 1546300800],
    [1, 1546300900],
    [1, 1546301000]
  ]
  expect(getFilesToBackup(lastBackup, changes))
    .toStrictEqual([1, 3])
})
