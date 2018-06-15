const Sequelize = require('sequelize')
const db = require('../db')


const Data = db.define('data', {
  date: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sentiment: {
    type: Sequelize.STRING,
    allowNull: false
  },
  confidence: {
    type: Sequelize.STRING,
    allowNull: false
  }
})


module.exports = Data
