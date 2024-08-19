function decorateTree (base) {
  function getTop (base) {
    if (base === 'PP') return 'P'
    if (base === 'BB') return 'B'
    if (base === 'RR') return 'R'
    if (base === 'BP' || base === 'PB') return 'R'
    if (base === 'RP' || base === 'PR') return 'B'
    if (base === 'BR' || base === 'RB') return 'P'
  }

  const tree = [base]

  for (let i = 0; i < base.split(' ').length - 1; i++) {
    const currentPart = tree[i].split(' ')
    let newPart = ''
    for (let j = 0; j < currentPart.length - 1; j++) {
      newPart += getTop(currentPart[j] + currentPart[j + 1]) + ' '
    }
    tree.push(newPart.trim())
  }

  return tree.reverse()
}

module.exports = { decorateTree }
