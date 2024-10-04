const { where } = require("sequelize");

class CartService{
    constructor(CartModel,CartProductModel,ProductModel){
        this.Cart = CartModel;
        this.CartProduct = CartProductModel
        this.Product = ProductModel;
    }
    async addCart(IdProduct,IdUser,quantity){
        try{
            quantity = Math.round(quantity);
            if(quantity<0){
                return {message:"Valor invalido para Quantidade"}
            };
            let currentCart = await this.Cart.findOne({where:{IdUser:IdUser}});
            let product = await this.Product.findByPk(IdProduct);

            currentCart = currentCart?currentCart: await this.Cart.create({totalPrice:0,IdUser:IdUser});
            await this.CartProduct.create({IdProduct:IdProduct,IdCart:currentCart.id,quantity:quantity,price:product.price*quantity});

            currentCart = await this.Cart.update({
                totalPrice:currentCart.totalPrice + product.price*quantity
            },{where:{id:currentCart.id}});
            return {currentCart,product};
        }
        catch (error){
            console.log(error);
            throw error;
        }
    }
    async removeCart(IdProduct,IdUser){
        try{
            let currentCart = await this.Cart.findOne({where:{IdUser:IdUser}});
            let currentCartProduct = await this.CartProduct.findOne({where:{IdProduct:IdProduct,IdCart:currentCart.id}});
            
            await this.Cart.update({
                totalPrice:currentCart.totalPrice - currentCartProduct.price
            },{where:{id:currentCart.id}});

            await this.CartProduct.destroy({
                where:{id:currentCartProduct.id}
            });
        }catch (error){
            console.log(error);
            throw error;
        }
    }
    async getCart(IdUser){
        try{
            let currentCart = await this.Cart.findOne({where:{IdUser:IdUser}});
            let allProducts = await this.CartProduct.findAll({where:{IdCart:currentCart.id}});
            return {currentCart,allProducts};
        }catch(error){
            console.log(error);
            throw error;
        }
    }
}
module.exports = CartService;