const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');

/* GET home page. */
router.get('/', homeController.index);
router.get('/detail/:id', homeController.detail);



/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Productos' });
});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Registrate' });
});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Inicia sesión' });
});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Perfil del usuario' });
});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Agrega tu producto' });
});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Edita tu perfil' });
});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Respuestas a tu busqueda' });
});
*/
module.exports = router;