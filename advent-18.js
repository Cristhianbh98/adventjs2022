function dryNumber (dry, numbers) {
  return Array.from(
    { length: numbers },
    (_, i) => i + 1
  ).filter(
    num => num.toString()
      .includes(dry.toString())
  )
}

module.exports = { dryNumber }
