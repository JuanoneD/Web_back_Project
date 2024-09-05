// ./services/userService.js

const db = require('../models');

class UserService{
    constructor(UserModel){
        this.User = UserModel;
    }

    async create(email, data_nasc, password){
        try{
            const newUser = await this.User.create({
                email:email,
                dataNasc:data_nasc,
                password:password
            });
            return newUser? newUser : null;
            
        }
        catch (error){
            throw error;
        }
    }

    async findAll(){
        try{
            const allUsers = await this.User.findAll();
            return allUsers?allUsers:null;
        }
        catch(error){
            throw error;
        }
    }

    async getByPk(pk){
        try{
            const user = await this.User.findByPk(pk);
            return user?user:null;
        }catch(error){
            throw error;
        }
    }
}

module.exports = UserService;