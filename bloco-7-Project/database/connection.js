const Sequelize = require('sequelize');

const connection = new Sequelize('guiapress', 'root', 'azlkaz', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = connection;