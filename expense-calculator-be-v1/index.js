const express = require('express');
const bodyParser = require('body-parser');

var config = require('./config/index');
var db = require('./db/mongo');
var products = require('./handlers/products_handler');

db.Init();
var api = express();
api.use(bodyParser.json());

api.get('/api/products', products.getAllProducts);
api.post('/api/products', products.addProduct);
api.get('/api/products/:id', products.getSingleProduct);
api.put('/api/products/:id', products.updateProduct);
api.patch('/api/products/:id', products.patchProduct);
api.delete('/api/products/:id', products.deleteProduct);

api.listen(8080, '0.0.0.0', () => {
    console.log('Your API has started on port 8080');
});
