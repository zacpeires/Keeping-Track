const User = require('./user')
const Calendar = require('./calendar')
const Month = require('./month')
const Day = require('./day')
const Week = require('./week')

User.hasMany(Calendar)
Calendar.hasMany(Month)
Calendar.hasMany(Week)
Calendar.hasMany(Day)
Calendar.belongsTo(User)
Month.belongsTo(Calendar)
Month.hasMany(Week)
Month.hasMany(Day)
Week.belongsTo(Calendar)
Week.hasMany(Day)
Day.belongsTo(Calendar)
Day.belongsTo(Month)

module.exports = {
  User,
  Calendar,
  Month,
  Day,
  Week
}


