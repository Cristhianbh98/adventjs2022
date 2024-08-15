/*
 * The elves bought a gift-wrapping machine this year. But it's not programmed! We need to create an algorithm that helps it in the task.
 * The machine receives an array of gifts. Each gift is a string. We need the machine to wrap each gift in wrapping paper and place it in an array of wrapped gifts.
 * The wrapping paper is the * symbol, and in order to wrap a gift, you need to place it surrounding the string. For example:
*/

function wrapping (gifts) {
  return gifts.map(gift => {
    const wrapTopBottom = '*'.repeat(gift.length + 2)
    return wrapTopBottom + '\n*' + gift + '*\n' + wrapTopBottom
  })
}

module.exports = { wrapping }
