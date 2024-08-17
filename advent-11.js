function getCompleted (part, total) {
  // given a time hh:mm:ss convert to just seconds
  const toSeconds = time => {
    const [hh, mm, ss] = time.split(':').map(Number)
    return hh * 3600 + mm * 60 + ss
  }

  const partSeconds = toSeconds(part)
  const totalSeconds = toSeconds(total)

  // if total is 0, return 1/1
  if (totalSeconds === 0) return '1/1'

  // find the greatest common divisor
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)

  // calculate the fraction

  const divisor = gcd(partSeconds, totalSeconds)
  const numerator = partSeconds / divisor
  const denominator = totalSeconds / divisor

  return `${numerator}/${denominator}`
}

module.exports = { getCompleted }
