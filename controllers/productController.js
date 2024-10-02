
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
    async allProduct(req,res){
        try{
            const allProduct = await this.ProductService.findAll()
            res.status(200).json(allProduct);
        }catch(error){
            res
                .status(500)
                .json({error: 'Ocorreu um erro ao coletar usuarios.'});
        }
    }
    async updateProduct(req,res){
        try{
            const id = req.query.Pk;
            const {name,description,price,stock} = req.body;
            const product = await this.ProductService.updateProduct(id,name,description,price,stock);
            res.status(200).json(product);
        }catch(error){
            res
                .status(500)
                .json({error: 'Ocorreu um erro.'});
        }
    }
    async deleteProduct(req,res){
        try{
            const id = req.query.Pk;
            await this.ProductService.deleteProduct(id);
            res.status(200).json({message:'Deletado com sucesso!'});
        }catch(error){
            res
            .status(500)
            .json({error: 'Ocorreu um erro.'});
        }
    }
}

module.exports = ProductController;