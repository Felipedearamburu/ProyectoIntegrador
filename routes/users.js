var express = require('express');
var router = express.Router();


const controladorUsuario = require('../controllers/controladorUsuario');

/* GET users listing. */

router.get('/register', controladorUsuario.register)

router.get('/login',  controladorUsuario.login)
router.get('/profile', controladorUsuario.profile)
router.get('/profileEdit', controladorUsuario.profileEdit)
router.get('/productAdd', controladorUsuario.addproduct)

module.exports = router;
