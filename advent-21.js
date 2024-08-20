function printTable (gifts) {
  const leftLength = gifts.reduce((acc, gift) => {
    return gift.name.length > acc
      ? gift.name.length
      : acc
  }, 4)

  const rightLength = gifts.reduce((acc, gift) => {
    return gift.quantity.toString().length > acc
      ? gift.quantity.toString().length
      : acc
  }, 8)
  const totalLegth = leftLength + rightLength + 7

  let list = '+'.repeat(totalLegth) + '\n'
  list += '| ' + 'Gift'.padEnd(leftLength, ' ') + ' | ' + 'Quantity'.padEnd(rightLength, ' ') + ' |\n'
  list += '| ' + '-'.repeat(leftLength) + ' | ' + '-'.repeat(rightLength) + ' |\n'
  list = gifts.reduce((acc, gift) => {
    const left = gift.name.padEnd(leftLength, ' ')
    const right = gift.quantity.toString().padEnd(rightLength, ' ')
    return acc + '| ' + left + ' | ' + right + ' |\n'
  }, list)

  return list + '*'.repeat(totalLegth)
}

module.exports = { printTable }
