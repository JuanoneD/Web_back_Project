// ./controllers/userController.js

class UserController{
    constructor(UserService){
        this.userService = UserService;
    }
    async createUser(req,res){
        //processar a request
        const {email, data_nasc, password} = req.body;
        try{
            const newUser = await this.userService.create(email, data_nasc, password);
            res.status(200).json(newUser);
        }
        catch(error){
            res
                .status(500)
                .json({error: 'Ocorreu um erro ao gravar o novo usuário.'});
        }
    }
    async findAllUsers(req,res){
        try{
            const AllUsers = await this.userService.findAll();
            res.status(200).json(AllUsers);
        }catch(error){
            res
                .status(500)
                .json({error: 'Ocorreu um erro.'});
        }
    }

    async getByPk(req,res){
        const Primary_key = req.query;
        try{
            const user = await this.userService.getByPk(Primary_key);
            res.status(200).json(user);
        }catch(error){
            res
                .status(500)
                .json({error: 'Ocorreu um erro.'});
        }
    }
}

module.exports = UserController;