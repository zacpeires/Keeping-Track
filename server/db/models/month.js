const db = require('../db')
const Sequelize = require('sequelize')

const Month = db.define('month', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  numberInYear: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  numberOfDays: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  current: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Month
