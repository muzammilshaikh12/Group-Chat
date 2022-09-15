const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Expense = sequelize.define('messages', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  message:{
  type : Sequelize.STRING,
   }
});

module.exports = Expense;