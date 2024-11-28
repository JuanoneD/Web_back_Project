
class SupplierController{
    constructor(SupplierService){
        this.supplierService = SupplierService;
    }

    async createSuppliers(req,res){
        const {name} = req.body;
        try{
            const newSuplier = await this.supplierService.createSuppliers(name);
            res.status(200).json(newSuplier);
        }
        catch(error){
            res
                .status(500)
                .json({error: 'Ocorreu um erro ao gravar o novo fornecedor.'});
        }
    }
    async allProduct(req,res){
        try{
            const allSuppliers = await this.supplierService.getAllSupliers()
            res.status(200).json(allSuppliers);
        }catch(error){
            res
                .status(500)
                .json({error: 'Ocorreu um erro ao coletar usuarios.'});
        }
    }
}

module.exports = SupplierController;