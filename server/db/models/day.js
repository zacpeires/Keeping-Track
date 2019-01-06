const Sequelize = require('sequelize')
const db = require('../db')

const Day = db.define('day', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dayOfTheWeek: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  date: {
    type: Sequelize.STRING,
    allowNull: false
  },
  current: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: true
  }
})

module.exports = Day
