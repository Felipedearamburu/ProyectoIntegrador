const db = require('../database/models');
const bcrypt = require('bcrypt');
const currentDate = Date.now();



module.exports = {
    register : (req, res) =>{
         res.render("register")
        
    },
    ingresar : (req, res) =>{
        return res.send(req.body)
        db.Usuario.create({
            nombre : req.body.nombre,
            email : req.body.email,
            password : bcrypjs.hashSync(req.body.password, 10),
            //imgUsuario: req.file ? req.file.filename : '',
            role : 1
        })
        .then(()=>{
            return res.redirect('/users/login');
        })     
        .catch(error => console.log(error));

    },
    login:(req, res)=> {
        if(req.session.Usuario === undefined){
            return res.render('login');   
        }else{
            return res.redirect('/');
        }

        
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