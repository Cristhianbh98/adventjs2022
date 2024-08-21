function executeCommands (commands) {
  const registers = Array(8).fill(0)

  for (let i = 0; i < commands.length; i++) {
    const command = commands[i]
    const [cmd, arg1, arg2] = command.split(/[\s,]+/)

    if (cmd === 'MOV') {
      if (arg1.startsWith('V')) {
        const source = parseInt(arg1.slice(1))
        const destination = parseInt(arg2.slice(1))
        registers[destination] = registers[source]
      } else {
        const value = parseInt(arg1)
        const destination = parseInt(arg2.slice(1))
        registers[destination] = value
      }
    } else if (cmd === 'ADD') {
      const source = parseInt(arg1.slice(1))
      const destination = parseInt(arg2.slice(1))
      const num1 = registers[source]
      const num2 = registers[destination]
      registers[source] = (num1 + num2) % 256
    } else if (cmd === 'DEC') {
      const regiser = parseInt(arg1.slice(1))
      registers[regiser] = (registers[regiser] - 1 + 256) % 256
    } else if (cmd === 'INC') {
      const regiser = parseInt(arg1.slice(1))
      registers[regiser] = (registers[regiser] + 1) % 256
    } else if (cmd === 'JMP') {
      if (registers[0] !== 0) {
        i = parseInt(arg1) - 1
      }
    }
  }

  return registers
}

module.exports = { executeCommands }
