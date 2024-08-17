function getFilesToBackup (lastBackup, changes) {
  const ids = changes.reduce((acc, [id, timestamp]) => {
    if (timestamp > lastBackup) {
      acc.push(id)
    }
    return acc
  }, [])

  return [...new Set(ids)].sort((a, b) => a - b)
}

module.exports = { getFilesToBackup }
