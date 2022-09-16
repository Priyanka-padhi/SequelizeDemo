module.exports = (sequelize,DataTypes) =>{
    const Product = sequelize.define('Product',{       //product -model name
        // Model attributes are defined here
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    Product.associate = function(models) {
        // associations can be defined here
        Product.hasMany(models.Review, {
            foreignKey: 'prod_Id'                  //must..

        })
    };
    return Product;
};