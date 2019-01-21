const User = require('./user')
const SingleDate = require('./singleDate')

User.hasMany(SingleDate)
SingleDate.belongsTo(User)

module.exports = {
  User,
  SingleDate
}


// date, month, dayOfTheWeek, hasPassed, currentDate
// can loop 365 times, or 12 times with a loop in the middle - probably better
// modify functions
