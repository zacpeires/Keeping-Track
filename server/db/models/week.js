const db = require('../db')
const Sequelize = require('sequelize')

const Week = db.define('week', {
  number: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  current: {
    type: Sequelize.BOOLEAN,
    defaultValue: false

  }
})

module.exports = Week
