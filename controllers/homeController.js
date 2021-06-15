const autos = require('../data/autos')
module.exports = {
    index: (req, res)=>{
        return res.render('index', {title: 'NUESTROS PRODUCTOS', autos: autos.productos })
    }, 
    detail: (req, res)=>{
        let id = req.params.id;
        for(let i = 0; i < autos.productos.length; i++){
            if(autos.productos[i].id == id){
                return res.render('detail', {auto : autos.productos[i]});
            }
        }
    }
}