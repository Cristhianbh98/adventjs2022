import assert from 'assert'

function fitsInOneBox(boxes = []) {
  return boxes
    .sort((a, b) => a.l - b.l) // Sort ascendant by the legth of the box 
    .every((box, index) => {
      if (index === 0 ) return true
      const prev = boxes[index - 1]
      return box.l > prev.l && box.w > prev.w && box.h > prev.h
    })
}

try {
  const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 }
  ]

  assert.equal(fitsInOneBox(boxes), true)
  console.log('✅ Test 1 passed')
} catch(e) {
  console.log('❌ Test 1 did not pass')
}

try {
  const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
  ]

  assert.equal(fitsInOneBox(boxes), false)
  console.log('✅ Test 2 passed')
} catch (e) {
  console.log('❌ Test 2 did not pass')
}

try {
  const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
  ]

  assert.equal(fitsInOneBox(boxes), true)
  console.log('✅ Test 3 passed')
} catch (e) {
  console.log('❌ Test 3 did not pass')
}