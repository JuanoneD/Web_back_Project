var express = require('express');
var router = express.Router();
const db =require('../models');
const auth = require('../auth');


const SupplierService = require('../services/suppliersService');
const SupplierController = require('../controllers/supplierController');

const supplierService = new SupplierService(db.Supplier);
const supplierController = new SupplierController(supplierService);

router.post('/',auth.verifyToken,async (req,res)=>{
    supplierController.createSuppliers(req,res);
});

router.get('/',auth.verifyToken,async (req,res)=>{
    supplierController.allProduct(req,res);
});

module.exports = router;