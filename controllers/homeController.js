//const autos = require('../data/autos')
const db = require('../database/models')
// const {where, Error} = require('sequelize')

module.exports = {
    index: (req, res)=>{ 

        db.Producto.findAll() 
        .then(data =>{
            res.send(data)
        })       
        
        
       
        

    

        
    }, 
    detail: (req, res)=>{
        //let id = req.params.id;
        // for(let i = 0; i < autos.productos.length; i++){
        //     if(autos.productos[i].id == id){
        //         return res.render('detail', {auto : autos.productos[i]});
        //     }
        // }
    }
}