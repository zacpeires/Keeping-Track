const Sequelize = require('sequelize')
const db = require ('../db')

const SingleDate = db.define('date', {
  date: {
    type: Sequelize.STRING,
    allowNull: false
  },
  month: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dayOfTheWeek: {
    type: Sequelize.STRING,
    allowNull: false
  },
  current: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: true
  },
  hasPassed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: true
  }
})

module.exports = SingleDate

