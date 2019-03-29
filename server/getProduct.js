const products = require('../products.json') //bring products.json into our scope. The scope of this getProducts file


const getProduct = (req, res) => {
    const item = products.find(element => element.id === parseInt(req.params.id)); //what is req.params.id calling?
    if (!item) {
        return res.status(500).send('This is not an item in our list');
    }
    else {
        return res.status(200).send(item);
    }
}

module.exports = getProduct;

