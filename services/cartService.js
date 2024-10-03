const { where } = require("sequelize");
const cart = require("../models/cart");

class CartService{
    constructor(CartModel,CartProductModel,ProductModel){
        this.Cart = CartModel;
        this.CartProduct = CartProductModel
        this.Product = ProductModel;
    }
    async addCart(IdProduct,IdUser,quantity){
        try{
            let newCart = await this.Cart.findOne({where:{IdUser:IdUser}});
            newCart = newCart?newCart: await this.Cart.create({totalPrice:0,IdUser:IdUser});
            await this.CartProduct.create({IdProduct:IdProduct,IdCard:newCart.id,quantity:quantity});
            let product = await this.Product.findByPk(IdProduct);
            return await this.Cart.update({
                totalPrice:product.price*quantity
            },{where:{id:newCart.id}});
        }
        catch (error){
            throw error;
        }
    }
}
module.exports = CartService;