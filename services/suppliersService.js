const { where } = require('sequelize');
const db = require('../models');


class SuppliersService{
    constructor(SuppliersModel){
        this.suppliers = SuppliersModel;
    }

    async create(name){
        try{
            let newSupliers = await this.suppliers.create({
                name:name
            });
            return newSupliers;
        }catch(err){
            console.log(err);
            throw err
        }
    }
    async getAllSupliers(){
        try{
            let allSuppliers = await this.suppliers.findAll(idPayment);
            return allSuppliers?allSuppliers:null

        }catch(err){
            console.log(err)
            throw err
        }
    }
}

module.exports = SuppliersService;