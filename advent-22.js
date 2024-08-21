function checkStepNumbers (systemNames, stepNumbers) {
  const dict = {}
  for (let i = 0; i < systemNames.length; i++) {
    if (
      dict[systemNames[i]] === undefined ||
      dict[systemNames[i]] < stepNumbers[i]
    ) {
      dict[systemNames[i]] = stepNumbers[i]
    } else {
      return false
    }
  }

  return true
}

module.exports = { checkStepNumbers }
