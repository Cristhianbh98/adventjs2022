function getGiftsToRefill (a1, a2, a3) {
  a1 = [...new Set(a1)]
  a2 = [...new Set(a2)]
  a3 = [...new Set(a3)]

  const uniqueA1 = a1.filter(x => !a2.includes(x) && !a3.includes(x))
  const uniqueA2 = a2.filter(x => !a1.includes(x) && !a3.includes(x))
  const uniqueA3 = a3.filter(x => !a1.includes(x) && !a2.includes(x))

  return [...uniqueA1, ...uniqueA2, ...uniqueA3]
}

module.exports = { getGiftsToRefill }
