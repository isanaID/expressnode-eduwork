const Sequalize = require('sequelize');
const db = require('../database/mysql');

let product = db.define('product', {
    id: {
        type: Sequalize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequalize.STRING,
        allowNull: false
    },
    price: {
        type: Sequalize.INTEGER,
        allowNull: false
    },
    stock: {
        type: Sequalize.INTEGER,
        allowNull: false
    },
    image: {
        type: Sequalize.STRING
    }
},{
    freezeTableName: true,
    timestamps: false
});

module.exports = product;