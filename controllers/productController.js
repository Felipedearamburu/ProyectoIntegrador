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

    edit: (req,res) => {
        let autoId = req.params.id;
        let promAutos = db.Producto.findByPk(id);
        
        Promise
        .all([promAutos])
        .then(([Producto]) => {
            return res.render('editProduct', {autos})})
        .catch(error => res.send(error))
    },
    store: (req,res) => {
    let productos = {
        nombreProducto: req.body.nombre,
        imagen: req.file ? req.file.filename : '',
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

    destroy: (req,res) => {
        let productoId = req.params.id;
        db.Producto.destroy({
            where: {
                id : productoId
            }
        })
        .then(() => {
            return res.redirect('/')
        })
    },
    /*comentar: (req,res) => {
        productoId = req.body.productId;
        let errores = [];
        if(req.body.comentarios === ''){
            errores.push('El campo comentario no puede estar vacío');
        }
        if(errores.length === 0){
            db.Comentario.create({
                product_id: req.body.producto_id,
                usuario_id: req.body.usuario_id,
                texto: req.body.comentario
            })
            .then(() => {
                return res.redirect('/product/detail/' + productoId);
            })
            .catch(error => console.log(error));
        } else {
            return res.render('errorComentario', {errores});
        }
    }*/

    
    





    
    


    
}