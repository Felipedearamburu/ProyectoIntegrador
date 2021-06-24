const db = require('../database/models');
const bcrypt = require('bcrypt');



module.exports = {
    register : (req, res) =>{
         res.render("register")
        
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
      
      
      

      


  
  

