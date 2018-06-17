const Sequelize = require('sequelize')
const db = require('../db')



const Topic = db.define('topic', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sourceId: {
    type: Sequelize.STRING,
    allowNull: false
  }
})


module.exports = Topic
