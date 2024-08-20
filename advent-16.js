function fixLetter (letter) {
  letter = letter
    .replace(/( +)?,/g, ', ')
    .replace(/( +)?\./g, '. ')
    .replace(/(santa) +(claus)/gi, 'Santa Claus')
    .replace(/( +)?\?+/g, '?')
    .replace(/( +)?!+/g, '!')
    .replace(/ +/g, ' ')
    .replace(/(\.|\?|!) ([a-z])/g, x => x.toUpperCase())
    .trim()
    .replace(/^[a-z]/, x => x.toUpperCase())
  if (!letter.match(/(\.|\?|!)$/)) {
    letter += '.'
  }
  return letter
}

module.exports = { fixLetter }
