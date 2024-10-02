
const db = require('../models');


class ProductService{
    constructor(ProductModel){
        this.Product = ProductModel;
    }

    async createProduct(name,description,price,stock){
        try{
            const newProduct = await this.Product.create({
                name:name,
                description:description,
                price:price,
                stock:stock
            });
            return newProduct? newProduct : null;
        }
        catch (error){
            throw error;
        }
    }
}
module.exports = ProductService;