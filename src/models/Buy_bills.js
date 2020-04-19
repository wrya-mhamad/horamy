const db = require('../database/index')
const Sequelize = require('sequelize')
const buyBillItem = require('./Buy_bill_items')
const Outcome = require('./Outcomes')

const DataTypes = Sequelize.DataTypes
const BuyBill = db.sequelize.define('buy_bills', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    bill_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    company: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'companies',
        key: 'id'
      }
    },
    do_total: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    di_total: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    detail: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'buy_bills'
  })

BuyBill.hasMany(buyBillItem)
BuyBill.hasMany(Outcome)

module.exports = BuyBill


