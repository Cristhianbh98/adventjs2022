function sortToys (toys, positions) {
  const min = Math.min(...positions)
  positions = positions.map(p => p - min)

  return toys.reduce((acc, toy, i) => {
    acc[positions[i]] = toy
    return acc
  }, [])
}

module.exports = { sortToys }
