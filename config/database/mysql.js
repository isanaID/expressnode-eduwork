let Sequalize = require('sequelize');
let db = new Sequalize('eduwork', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = db;