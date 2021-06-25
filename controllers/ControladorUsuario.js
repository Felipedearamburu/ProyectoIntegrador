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
        if(req.session.Usuario === undefined){
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
  store: (req,res)=>{
   let errors = [];
    if(req.body.nombre === ''){
       errors.push('Campo del nombre no puede estar vacio');
   } 
if(req.body.email === ''){
    errors.push('El campo email no puede estar vacio');
}
if(req.body.password === ''){
    errors.push('el campo password no puede estar vacio');
}
if(errors.length === 0){

    db.Usuario.create({
        nombre : req.body.nombre,
        email : req.body.email,
        password: bcrypjs.hashSync(req.body.password,10),
        imgUsuario : req.file? req.file.filename : '',
        role : 1

    })
    
.then(()=>{
    return res.redirect('/users/login');
})
.catch(error => console.log(error))
}else{
    return res.render('erroresRegistro')
}


}
}

    
      
      

      


  