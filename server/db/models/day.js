const Sequelize = require('sequelize')
const db = require('../db')

const Day = db.define('day', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  current: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Day
