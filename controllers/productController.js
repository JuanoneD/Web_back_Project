
class ProductController{
    constructor(ProductService){
        this.ProductService = ProductService;
    }
    async createProduct(req,res){
        const {name,description,price,stock} = req.body;
        try{
            const newProduct = await this.ProductService.create(name,description,price,stock);
            res.status(200).json(newProduct);
        }
        catch(error){
            res
                .status(500)
                .json({error: 'Ocorreu um erro ao gravar o novo usuário.'});
        }
    }
}

module.exports = ProductController;