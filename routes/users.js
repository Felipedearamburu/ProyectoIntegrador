var express = require('express');
const ControladorUsuario = require('../controllers/controladorUsuario');
var router = express.Router();


const controladorUsuario = require('../controllers/controladorUsuario');

/* GET users listing. */

router.get('/register', controladorUsuario.register)
//router.post('/store', controladorUsuario.ingresar)
router.get('/profile', controladorUsuario.profile)
router.get('/profileEdit', controladorUsuario.profileEdit)
//router.post('/store', controladorUsuario.ingresar)
router.get('/create', controladorUsuario.create)
router.post('/store', controladorUsuario.store)
router.get('/admin' , controladorUsuario.admin)



module.exports = router;
