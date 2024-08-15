function createCube (size) {
  let cubeUpper = ''
  let cubeLower = ''

  for (let i = 0; i < size; i++) {
    cubeUpper += 's'.repeat(size - (i + 1))
    cubeUpper += '/\\'.repeat(i + 1)
    cubeUpper += '_\\'.repeat(size) + '\n'

    cubeLower += 's'.repeat(i)
    cubeLower += '\\/'.repeat(size - i)
    cubeLower += '_/'.repeat(size) + '\n'
  }
  const cube = cubeUpper + cubeLower
  return cube.trim().replace(/s/g, ' ')
}

module.exports = { createCube }
