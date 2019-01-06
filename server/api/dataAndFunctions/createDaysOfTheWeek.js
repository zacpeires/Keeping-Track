
const createDaysOfTheWeek = (number) => {
  let correctDay
  let daysOfTheWeek = [
    {
      name: 'Monday',
      dayOfTheWeek: 1,
    },
    {
      name: 'Tuesday',
      dayOfTheWeek: 2
    },
    {
      name: 'Wednesday',
      dayOfTheWeek: 3
    },
    {
      name: 'Thursday',
      dayOfTheWeek: 4
    },
    {
      name: 'Friday',
      dayOfTheWeek: 5
    },
    {
      name: 'Saturday',
      dayOfTheWeek: 6
    },
    {
      name: 'Sunday',
      dayOfTheWeek: 7
    }
  ]

    if (number > 0) {
      correctDay = daysOfTheWeek[number]
      } else {
        correctDay = daysOfTheWeek[0]
      }

      return correctDay
}


module.exports = createDaysOfTheWeek
