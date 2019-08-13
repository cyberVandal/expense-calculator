const valide = require('node-input-validator');
var productsModel = require('../models/products_model');
var productsValidator = require('../validators/products_validator');

var getAllProducts = (req, res) => {
    productsModel.getAllProducts((err, data) => {
        if (err) {
            return res.status(500).send('Internal server error');
        }
        return res.status(200).send(data);
    });
};

var addProduct = (req, res) => {
    let v = new valide(req.body, productsValidator.schema);
    v.check().then(matched => {
        if (matched) {
            productsModel.addProduct(req.body, (err) => {
                if (err) {
                    return res.status(400).send('Bad Request');
                }
                return res.status(201).send('Created');
            });
        } else {
            return res.status(400).send(v.errors);
        }
    });
};

var getSingleProduct = (req, res) => {
    productsModel.getSingleProduct(req.params.id, (err, data) => {
        if (err) {
            return res.status(500).send('ISE');
        }
        return res.status(200).send(data);
    });
};

var updateProduct = (req, res) => {
    productsModel.updateProduct(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).send('ISE');
        }
        return res.status(200).send('OK');
    });
};

var patchProduct = (req, res) => {
    productsModel.updateProduct(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).send('ISE');
        }
        return res.status(200).send('OK');
    });
};

var deleteProduct = (req, res) => {
    productsModel.deleteProduct(req.params.id, (err) => {
        if (err) {
            return res.status(500).send('ISE');
        }
        return res.status(200).send('OK');
    });
};

module.exports = {
    getAllProducts,
    addProduct,
    getSingleProduct,
    updateProduct,
    patchProduct,
    deleteProduct
};