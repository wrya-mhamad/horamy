const db = require('../database/index')
const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes
module.exports =  db.sequelize.define('companies', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    o_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    phone: {
      type: DataTypes.CHAR(11),
      allowNull: false,
      unique: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    detail: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'companies'
  })