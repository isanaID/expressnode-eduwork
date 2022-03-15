const model = require('../config/model');
const controller = {};

controller.getAll = async function(req, res) {
    try {
        const products = await model.product.findAll();
        res.send({
            status: 'success',
            data: products
        });
    } catch (error) {
        res.send({
            status: 'failed',
            message: error.message
        });
    }
}

controller.getOne = async function(req, res) {
    try {
        const product = await model.product.findOne({
            where: {
                id: req.params.id
            }
        });
        res.send({
            status: 'success',
            data: product
        });
    } catch (error) {
        res.send({
            status: 'failed',
            message: error.message
        });
    }
}

controller.post = async function(req, res) {
    try {
        let product = await model.product.create({
            id: req.body.id,
            name: req.body.name,
            price: req.body.price,
            stock: req.body.stock,
            image: req.file.path
        });
        res.send({
            status: 'success',
            data: product
        });
    } catch (error) {
        res.send({
            status: 'failed',
            message: error.message
        });
    }
}

controller.put = async function(req, res) {
    try {
        let product = await model.product.update({
            id: req.body.id,
            name: req.body.name,
            price: req.body.price,
            stock: req.body.stock,
            image: req.file.path
        }, {
            where: {
                id: req.params.id
            }
        });
        res.send({
            status: 'success',
            data: product
        });
    } catch (error) {
        res.send({
            status: 'failed',
            message: error.message
        });
    }
}

controller.delete = async function(req, res) {
    try {
        const product = await model.product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.send({
            status: 'success',
            data: product
        });
    } catch (error) {  
        res.send({
            status: 'failed',
            message: error.message
        });
    }
}

module.exports = controller;