const User = require('./user')
const SingleDate = require('./singleDate')

User.hasMany(SingleDate)
SingleDate.belongsTo(User)

module.exports = {
  User,
  SingleDate
}


