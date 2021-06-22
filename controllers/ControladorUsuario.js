module.exports = {
    register : (req, res) =>{
         res.render("register")
        
    },
    login:(req, res)=> {
        return res.render("login")
        return res.send("Hola")
    },
    profile:(req,res)=>{
        res.render("profile")
    },

   profileEdit: (req,res)=>{
       return res.render('profileEdit')

   },
  
  addproduct: (req,res)=>{
      res.render("productAdd")
  }
  
}
let controladorUsuario = {
    registro: (req,res) => {
        if ( req.session.usuarioIngresado != null){
            return res.redirect("/")
        } else{
            return res.render("register")
        }
    },
    




}