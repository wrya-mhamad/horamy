const db = require('../database/index')
const Sequelize = require('sequelize')
const SellBillItem = require('./Sell_bill_items')
const Income = require('./Incomes')

const DataTypes = Sequelize.DataTypes
const SellBill = db.sequelize.define('sell_bills', {
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
    d_rate: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    c_do: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    c_di: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    detail: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'sell_bills'
  })

  SellBill.hasMany(SellBillItem)
  SellBill.hasMany(Income)
 module.exports = SellBill