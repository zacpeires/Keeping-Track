const db = require('../db')
const Sequelize = require('sequelize')

const Calendar = db.define('year', {
  year: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  current: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Calendar
