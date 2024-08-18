function getOptimalPath (path) {
  path = path.reverse()

  for (let i = 1; i < path.length; i++) {
    for (let j = 0; j < path[i].length; j++) {
      path[i][j] += Math.min(path[i - 1][j], path[i - 1][j + 1])
    }
  }
  console.log(path)
  return path[path.length - 1][0]
}

module.exports = { getOptimalPath }
