var express = require('express');
var router = express.Router();
const db =require('../models');
const auth = require('../auth');

const ProductService = require('../services/productService');
const ProductController = require('../controllers/productController');
const req = require('express/lib/request');

const productService = new ProductService(db.Product);
const productController = new ProductController(ProductService);

router.get('/', function(req, res, next) {
    res.send('Módulo de Produtos está rodando.');
});

module.exports = router;