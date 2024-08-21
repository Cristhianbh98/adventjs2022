function canExit (maze) {
  const rows = maze.length
  const cols = maze[0].length

  let start = null
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (maze[r][c] === 'S') {
        start = [r, c]
        break
      }
    }
    if (start) break
  }

  function dfs (r, c, visited) {
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      maze[r][c] === 'W' ||
      visited.has(`${r},${c}`)
    ) return false

    if (maze[r][c] === 'E') return true

    visited.add(`${r},${c}`)

    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1]
    ]

    for (const [dr, dc] of directions) {
      if (dfs(r + dr, c + dc, visited)) return true
    }

    return false
  }

  const canExit = dfs(start[0], start[1], new Set())
  return canExit
}

module.exports = { canExit }
