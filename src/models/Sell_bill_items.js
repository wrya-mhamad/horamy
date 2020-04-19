const db = require('../database/index')
const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes
module.exports = db.sequelize.define('sell_bill_items', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sellBillId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'sell_bills',
        key: 'id'
      }
    },
    item_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'store',
        key: 'id'
      }
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
    },
    do_total: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'sell_bill_items'
  })