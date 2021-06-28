//const autos = require('../data/autos')
const db = require('../database/models')
// const {where, Error} = require('sequelize')

module.exports = {
    index: (req, res)=>{ 

        db.Producto.findAll() 
        .then(data =>{
            res.render('index', {autos: data})
        })       
                
    }, 
    detail: (req, res)=>{
        const productoId = req.params.id
        db.Producto.findByPk(productoId) 
        .then((data) =>{
            console.log(data)
            res.render('detail', {autos: data})
         })
    }
}