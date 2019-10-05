const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
//Middleware inport
const withAuth = require('./middleware/middleware');
//JWT Import
const jwt = require('jsonwebtoken');


const User = require('./models/User.js');

var config = require('./config/index');
var db = require('./db/mongo');
var products = require('./handlers/products_handler');

//Secret for JWT
const secret = 'mysecretsshhh';

db.Init();
var api = express();

api.use(bodyParser.json());
api.use(cookieParser());
api.use(cors(

    {
        origin: 'http://localhost:3000',
        credentials: true
    }
));


api.get('/api/products', products.getAllProducts);
api.post('/api/products', products.addProduct);
api.get('/api/products/:id', products.getSingleProduct);
api.put('/api/products/:id', products.updateProduct);
api.patch('/api/products/:id', products.patchProduct);
api.delete('/api/products/:id', products.deleteProduct);

// Del za Avtentikacija so JWT

api.get('/api/home', function (req, res) {
    res.send('Welcome!');
});


api.get('/api/secret', withAuth, function (req, res) {
    res.send('The password is potato');
});

// POST route to register a user
api.post('/api/register', function (req, res) {
    const { email, password } = req.body;
    const user = new User({ email, password });
    user.save(function (err) {
        if (err) {
            res.status(500)
                .send("Error registering new user please try again.");
        } else {
            res.status(200).send("Welcome to the club!");
        }
    });
});


//JWT If the password is correct, we will issue a signed token to the requester
api.post('/api/authenticate', function (req, res) {
    const { email, password } = req.body;
    User.findOne({ email }, function (err, user) {
        if (err) {
            console.error(err);
            res.status(500)
                .json({
                    error: 'Internal error please try again'
                });
        } else if (!user) {
            res.status(401)
                .json({
                    error: 'Incorrect email or password'
                });
        } else {
            user.isCorrectPassword(password, function (err, same) {
                if (err) {
                    res.status(500)
                        .json({
                            error: 'Internal error please try again'
                        });
                } else if (!same) {
                    res.status(401)
                        .json({
                            error: 'Incorrect email or password'
                        });
                } else {
                    // Issue token
                    const payload = { email };
                    const token = jwt.sign(payload, secret, {
                        expiresIn: 86400 * 30
                    });
                    res.cookie('token', token, { httpOnly: true })
                        .sendStatus(200);
                }
            });
        }
    });
});

// will return a 200 HTTP status if our requester has a valid token
api.get('/checkToken', withAuth, function (req, res) {
    res.sendStatus(200);
});

api.listen(8080, '0.0.0.0', () => {
    console.log('Your API has started on port 8080');
});
