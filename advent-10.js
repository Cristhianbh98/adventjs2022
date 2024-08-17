function checkJump (heights) {
  let downs = 0; let ups = 0; let isDowning = false; let isUpping = false

  for (let i = 0; i < heights.length - 1; i++) {
    if (heights[i + 1] < heights[i] && !isDowning) {
      downs++
      isDowning = true
      isUpping = false
    } else if (heights[i + 1] > heights[i] && !isUpping) {
      ups++
      isDowning = false
      isUpping = true
    }
  }
  return downs === 1 && ups === 1
}

module.exports = { checkJump }
