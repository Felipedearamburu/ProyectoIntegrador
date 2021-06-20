const db = require('../database/models');

//const product 

module.exports = {
    index: (req,res) => {
        db.product.findAll()
        .then
    },
    detail: (req,res) => {
        const productId = req.params.id;
        db.Product.findByPk(productId, {
//
        })
        .then(product => {
            // return res.send(product);
            return res.render('product', {product})
        })
    },
}