var express = require('express');
var router = express.Router();
const db =require('../models');
const auth = require('../auth');

const ProductService = require('../services/productService');
const ProductController = require('../controllers/productController');
const req = require('express/lib/request');

const productService = new ProductService(db.Product);
const productController = new ProductController(productService);

router.get('/', function(req, res, next) {
    res.send('Módulo de Produtos está rodando.');
});

router.post('/newProduct', async (req,res)=>{
    productController.createProduct(req,res);
});

router.get('/allProduct',async(req,res)=>{
    productController.allProduct(req,res);
})

router.put('')

module.exports = router;