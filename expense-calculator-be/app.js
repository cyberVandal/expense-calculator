var express = require('express')
var cors = require('cors')
var app = express()

const port = 8080;

app.use(cors());

const API =
{
    "products": [{
        "productName": "Sok",
        "productDescription": "Sok za osvezuvanje",
        "productType": "Napitok",
        "purchaseDate": "17.07.2019",
        "id": 12,
        "productPrice": 120,
    }, {
        "productName": "Cokolada",
        "productDescription": "Sok za osvezuvanje",
        "productType": "Hrana",
        "purchaseDate": "17.07.2019",
        "id": 13,
        "productPrice": 500,
    }, {
        "productName": "Kikiriki",
        "productDescription": "Sok za osvezuvanje",
        "productType": "Hrana",
        "purchaseDate": "17.07.2019",
        "id": 14,
        "productPrice": 70,
    }, {
        "productName": "Viski",
        "productDescription": "Sok za osvezuvanje",
        "productType": "Napitok",
        "purchaseDate": "17.07.2019",
        "id": 15,
        "productPrice": 1500,
    }, {
        "productName": "Sendvich",
        "productDescription": "Sok za osvezuvanje",
        "productType": "Hrana",
        "purchaseDate": "17.07.2019",
        "id": 16,
        "productPrice": 100,
    }, {
        "productName": "Sapun",
        "productDescription": "Sok za osvezuvanje",
        "productType": "Higiena",
        "purchaseDate": "17.07.2019",
        "id": 17,
        "productPrice": 70,
    }]
}

function getProductById(id) {
    return API.products.find(element => element.id === id);
}

app.get('/', (req, res) => res.send("Se e ok"));

app.get('/products', (req, res) => res.send(API));

app.get('/products/:id', (req, res) => {
    console.log(req.params.id);
    const response = getProductById(parseInt(req.params.id));
    res.send(response);
})

app.listen(port, function () {
    console.log(`CORS-enabled web server listening on port ${port}`);
})

