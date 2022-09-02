const Sequelize = require('sequelize');

const connection = new Sequelize('guiapergunta', 'root', 'azlkaz', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = connection;