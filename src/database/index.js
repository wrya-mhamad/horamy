const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('horamy', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
  })

  
db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db