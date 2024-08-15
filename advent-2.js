/*
 * A millionaire bought a social network, and he doesn't bring good news. He has announced that each time an employee misses a working day due to a holiday, they will have to compensate it with two extra hours another working day of the same year.
 * Obviously the people who work in the company have not made the slightest joke and are preparing a program that tells them the number of extra hours they would do in the year if the new rule were applied.
 * Since it is office work, their working hours are from Monday to Friday. So you only have to worry about the holidays that fall on those days.
 * Given a year and an array with the dates of the holidays, return the number of extra hours that would be done during that year:
*/

const year = 1985

const holidays = ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']

function countHours (year = 2022, holidays = []) {
  let totalHours = 0
  for (const holiday of holidays) {
    const [month, day] = holiday.split('/')
    const dayOfWeek = new Date(year, month - 1, day).getDay()
    if (dayOfWeek !== 0 && dayOfWeek !== 6) totalHours += 2
  }

  return totalHours
}

module.exports = { countHours }
