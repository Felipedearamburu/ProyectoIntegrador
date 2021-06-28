const db = require('../database/models')
const bcrypt = require('bcrypt');
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
    },

    login:(req, res)=> {
       return res.render('login')        
    },
    autenticar : (req, res) =>{
        db.Usuario.findOne({
            where: {email : req.body.email}
        })
        .then((user) => {
        if(req.body.password == user.password){
                req.session.user = user
                return res.redirect('/')
            } else {return res.send ('Algo malo ha ocurrido')}

        })
        .catch((error) => {
            return res.send('Algo malo ha ocurrido')
        })
    },
    
    logout: (req,res) => {
        req.session.destroy()
        return res.redirect('/')
        
    }



}