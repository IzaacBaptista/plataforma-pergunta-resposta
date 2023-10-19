const Sequelize = require('sequelize');

const conection = new Sequelize('guiaperguntas', 'root', 'senha',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = conection;