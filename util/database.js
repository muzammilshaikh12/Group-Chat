const Sequelize = require('sequelize');

const sequelize = new Sequelize('group_chat', 'root', 'Muzammil@123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;