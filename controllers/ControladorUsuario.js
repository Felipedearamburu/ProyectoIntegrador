const db = require('../database/models');
const bcrypt = require('bcrypt');
const currentDate = Date.now();



module.exports = {
    register : (req, res) =>{
         res.render("register")
        
    },
    profile: (req, res)=>{ 
        db.Producto.findAll() 
        .then(data =>{
            res.render('profile', {autos: data})
        })       
                
    }, 

   profileEdit: (req,res)=>{
       return res.render('profileEdit')

   },
  
  addproduct: (req,res)=>{
      res.render("productAdd")

     

  },
  create: (req,res) => {
    res.render('register')
  },

  store: (req,res)=>{
        let usuarios= {
            nombre: req.body.nombre,
            Email: req.body.email,
            password: req.body.password,
            telefono: req.body.numero,
            email: req.body.email,
            role: 1,
            FechaDeNacimiento: req.body.nacimiento,
            createdAt: currentDate,
            updatedAt: currentDate
        }
        console.log(usuarios)
        db.Usuario.create(usuarios)
        .then(()=>{
            res.redirect('/')
        })
        .catch((error)=> {
            return res.send(error)
        }
        )


}
}