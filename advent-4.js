/*
 * Santa Claus needs to review his gift boxes to make sure he can pack them all in his sleigh. He has a series of boxes of different sizes, characterized by their length, width, and height.
 * Your task is to write a function that, given a list of boxes with their sizes, determines whether it is possible to pack all the boxes in one so that each box contains another (which in turn contains another, and so on).
 * Each box represents its measures with an object. For example: {l: 2, w: 3, h: 2}. This means that the box has a length of 2, a width of 3 and a height of 2.
 */

function fitsInOneBox (boxes = []) {
  return boxes
    .sort((a, b) => a.l - b.l) // Sort ascendant by the legth of the box
    .every((box, index) => {
      if (index === 0) return true
      const prev = boxes[index - 1]
      return box.l > prev.l && box.w > prev.w && box.h > prev.h
    })
}

module.exports = { fitsInOneBox }
