
const createMonthsOfTheYear = (leapYear) => {

let numberOfDaysInFeb;

if (leapYear(new Date().getFullYear())) {
  numberOfDaysInFeb = 29
} else {
  numberOfDaysInFeb = 28
}

const monthsOfTheYear = [
  {
    name: 'January',
    numberInYear: 1,
    numberOfDays: 31
  },
  {
    name: 'February',
    numberInYear: 2,
    numberOfDays: numberOfDaysInFeb
  },
  {
    name: 'March',
    numberInYear: 3,
    numberOfDays: 31
  },
  {
    name: 'April',
    numberInYear: 4,
    numberOfDays: 30
  },
  {
    name: 'May',
    numberInYear: 5,
    numberOfDays: 31
  },
  {
    name: 'June',
    numberInYear: 6,
    numberOfDays: 30
  },
  {
    name: 'July',
    numberInYear: 7,
    numberOfDays: 31
  },
  {
    name: 'August',
    numberInYear: 8,
    numberOfDays: 31
  },
  {
    name: 'September',
    numberInYear: 9,
    numberOfDays: 30
  },
  {
    name: 'October',
    numberInYear: 10,
    numberOfDays: 31
  },
  {
    name: 'November',
    numberInYear: 11,
    numberOfDays: 30
  },
  {
    name: 'December',
    numberInYear: 12,
    numberOfDays: 31
  }
]

return monthsOfTheYear

}

module.exports = createMonthsOfTheYear
