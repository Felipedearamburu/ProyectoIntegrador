const db = require('../database/models');
const bcrypt = require('bcrypt');



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
        if(req.session.usuario === undefined){
            return res.render('login');   
        }else{
            return res.redirect('/');
        }

        
    },
    profile:(req,res)=>{
        res.render("profile")
    },

   profileEdit: (req,res)=>{
       return res.render('profileEdit')

   },
  
  addproduct: (req,res)=>{
      res.render("productAdd")

     

  },
  // store: (req,res)=>{
   //let errores = [];
    // if(req.body.nombre === ''){
      //   errores.push('Este campo no puede estar vacio');
   } 
      
      
      

      


  
  

