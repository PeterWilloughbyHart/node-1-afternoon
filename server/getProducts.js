const products = require('../products.json') //bring products.json into our scope. The scope of this getProducts file


const getProducts = (require, response) => { 
    if(require.query.price) {
        let priced = products.filter(element => element.price >= +(require.query.price));
        return response.status(200).send(priced); //This is our handler
}
    else { response.status(200).send(products)}

}

module.exports = getProducts; 


//module.exports = name of file. To export.