var express = require('express');
const ControladorUsuario = require('../controllers/controladorUsuario');
var router = express.Router();


const controladorUsuario = require('../controllers/controladorUsuario');

/* GET users listing. */

router.get('/register', controladorUsuario.register)
router.post('/store', controladorUsuario.ingresar)
router.get('/login',  controladorUsuario.login)
router.get('/profile', controladorUsuario.profile)
router.get('/profileEdit', controladorUsuario.profileEdit)
router.post('/store', controladorUsuario.ingresar)




module.exports = router;
