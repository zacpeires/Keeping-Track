const Sequelize = require('Sequelize')
const db = require('../db')

const Month = db.define('month', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numberInYear: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    // hasPassed: {
    //     type: Sequelize.BOOLEAN,
    //     allowNull: true
    // }
})

module.exports = Month