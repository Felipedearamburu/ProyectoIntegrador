const db = require('../database/models');
const currentDate = Date.now();
//const product 

module.exports = {
    index: (req,res) => {
        db.product.findAll()
        .then
    },
    create: (req,res) => {
    res.render('productAdd')

    },
    store: (req,res) => {
    let productos = {
        nombreProducto: req.body.nombre,
        imagen: req.body.imagen,
        precio: req.body.precio,
        descripcion: req.body.description,
        userAdded: 1,
        createdAt: currentDate,
        updatedAt: currentDate
    }
    console.log(productos)

    db.Producto.create(productos)
    .then(()=>{
        res.redirect('/')
    })
    .catch((error)=> {
        return res.send(error)
    }
    )







    },













    detail: (req,res) => {
//         const productId = req.params.id;
//         db.Product.findByPk(productId, {
// //
//         })
//         .then(product => {
//             // return res.send(product);
//             return res.render('product', {product})
//         })
    },

    
    





    
    


    
}