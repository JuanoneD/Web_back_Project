const Sequelize = require("sequelize");


module.exports= (sequelize) => {
    const User = require('./user')(sequelize);  
    const Payment  = sequelize.define('Payment',{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        totalPrice:{
            type:Sequelize.FLOAT,
            allowNull:false
        },
        status:{
            type:Sequelize.STRING,
            allowNull:false
        }
    });

    Cart.belongsTo(User,{
        constraint: true,
        foreignKey: 'IdUser'
    })
    return Cart;
}