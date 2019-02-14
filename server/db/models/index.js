const User = require('./user')
const SingleDate = require('./singleDate')
const Month = require('./month')

User.hasMany(SingleDate)
SingleDate.belongsTo(User)
Month.hasMany(SingleDate)
SingleDate.belongsTo(Month)

module.exports = {
  User,
  SingleDate
}


