function checkPart (part) {
  function getReverse (str) {
    return str.split('').reverse().join('')
  }

  if (getReverse(part) === part) return true

  const partArr = part.split('')
  for (let i = 0; i < partArr.length; i++) {
    const joinedStr = partArr.filter((_, index) => index !== i).join('')
    if (getReverse(joinedStr) === joinedStr) return true
  }

  return false
}

module.exports = { checkPart }
