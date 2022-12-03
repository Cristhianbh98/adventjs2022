import assert from 'assert'

const year = 1985

const holidays = ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']

function countHours(year = 2022, holidays = []) {
  let totalHours = 0
  for (const holiday of holidays) {
    const [month, day] = holiday.split('/')
    const dayOfWeek = new Date(year, month - 1, day).getDay()
    if (dayOfWeek !== 0 && dayOfWeek !== 6) totalHours += 2
  }
    
  return totalHours
}

try {
  assert.equal(countHours(year, holidays), 10)
  console.log('✅ Test passed')
} catch(e) {
  console.log('❌ Test did not pass')
}

