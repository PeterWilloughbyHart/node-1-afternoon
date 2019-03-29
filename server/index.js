const express = require('express'); //Set  express = to require('express'). Node setup.

const getProducts = require('./getProducts');
const getProduct = require('./getProduct');

const app = express(); //You have to invoke express

const port = 8080;

// const products = require('../products.json');







app.get('/api/products/:id', getProduct);


app.get('/api/products', getProducts); //Our getProducts arrow function from getProducts.js.


//query is /?=' '
//parameter is /:' '


app.listen(port, () =>
console.log("This thing on? Guess so."));