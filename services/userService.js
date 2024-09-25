// ./services/userService.js

const db = require('../models');
const auth = require('../auth');
<<<<<<< HEAD
const bcrypt = require('bcrypt');

var round_salts=10;
=======
>>>>>>> 41bc42a4ccbeb02451cbb21004b836ac51ee3b57

class UserService{
    constructor(UserModel){
        this.User = UserModel;
    }
<<<<<<< HEAD
    
    async create(email, data_nasc, password){
        try{
            console.log(password);
            const hash = await bcrypt.hash(password,parseInt(round_salts));
            const newUser = await this.User.create({
                email:email,
                dataNasc:data_nasc,
                password:hash
            });
            return newUser? newUser : null;
=======

    async create(email, data_nasc, password){
        try{
            const newUser = await this.User.create({
                email:email,
                dataNasc:data_nasc,
                password:password
            });
            return newUser? newUser : null;
            
>>>>>>> 41bc42a4ccbeb02451cbb21004b836ac51ee3b57
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
    async login(email,password){
        try{
<<<<<<< HEAD
            console.log(password);
=======
>>>>>>> 41bc42a4ccbeb02451cbb21004b836ac51ee3b57
            const User = await this.User.findOne({
                where:{email:email}
            });
            if(User){
<<<<<<< HEAD
                if(await bcrypt.compare(password,User.password)){
                    User.dataValues.Token = await auth.generateToken(User);
                    User.dataValues.password = '';
                }else{
                    throw new Error("Senha invalida");
                }
=======
                User.dataValues.Token = await auth.generateToken(User);
                User.dataValues.password = '';
>>>>>>> 41bc42a4ccbeb02451cbb21004b836ac51ee3b57
            }
            return User?User:null
        }catch(error){
            throw(error)
        }
    }
}

module.exports = UserService;