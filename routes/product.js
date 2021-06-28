const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({

    destination: (req, file, cb) => {

        cb(null, path.resolve(__dirname, '../public/images/productos'))

    },

    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))

    }
})

var upload = multer({ storage : storage });

router.get('/', productController.index);
router.get('/detail/:id', productController.detail);
router.post('/product/borrar/:id', productController.destroy);
router.get('/create', productController.create);
router.post('/store', upload.single('imagen'), productController.store);
router.post('/comentar', productController.comentar);



module.exports = router;