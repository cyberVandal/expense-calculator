var mongoose = require('mongoose');

var ProductModel = mongoose.model(
    'dbec',
    mongoose.Schema({
        product_name: String,
        product_description: String,
        product_type: String,
        purchase_date: String,
        product_price: Number
    })
);

var addProduct = (data, cb) => {
    var movie = new ProductModel(data);
    movie.save((err) => {
        if (err) {
            cb(err);
        }
        cb(null);
    });
}

var getAllProducts = (cb) => {
    ProductModel.find((err, res) => {
        if (err) {
            cb(err, null);
        }
        cb(null, res);
    });
}

var getSingleProduct = (id, cb) => {
    ProductModel.findById(id, (err, res) => {
        if (err) {
            cb(err, null);
        }
        cb(null, res);
    });
}

var updateProduct = (id, data, cb) => {
    ProductModel.updateOne({ _id: id }, data, (err) => {
        if (err) {
            cb(err);
        }
        cb(null);
    })
}

var deleteProduct = (id, cb) => {
    ProductModel.deleteOne({ _id: id }, (err) => {
        if (err) {
            cb(err);
        }
        cb(null);
    });
}

module.exports = {
    addProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct
}