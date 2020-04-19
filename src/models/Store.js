const db = require('../database/index')
const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes
module.exports = db.sequelize.define('store', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    crt_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    exp_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    buy_price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    sell_price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'store'
  })
