const gifts = ['book', 'game', 'socks']

function wrapping(gifts) {
  return gifts.map(gift => {
    const wrapTopBottom = "*".repeat(gift.length + 2)
    return wrapTopBottom + "\n*" + gift + "*\n" + wrapTopBottom 
  })
}

console.log(wrapping(gifts))
