const db = require('../database/index')
const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes
module.exports = db.sequelize.define('incomes', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    sellBillId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'sell_bills',
        key: 'id'
      }
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    timestamps:false,
    tableName: 'incomes'
  })
