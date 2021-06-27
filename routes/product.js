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
        //Ver UniqueID
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))

    }
})

var upload = multer({ storage });

router.get('/', productController.index);
router.get('/detail/:id', productController.detail);
router.get('/create', productController.create);
router.post('/store', productController.store);
router.get('/productoDelete/:id', productController.delete);
router.post('/delete/:id', productController.destroy);

module.exports = router;