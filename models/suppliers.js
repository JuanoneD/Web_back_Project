const Sequelize = require("sequelize");

module.exports= (sequelize) => { 
    const Suppliers  = sequelize.define('suppliers',{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        name:{
            type:Sequelize.STRING,
            allowNull:false
        }
    });

    return Suppliers;
}