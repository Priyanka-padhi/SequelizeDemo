
module.exports = (sequelize,DataTypes) =>{
    const Review = sequelize.define('Review',{
        rating:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
        },
        prod_Id:{
            type:DataTypes.INTEGER
        }
    });
    Review.associate = function(models) {
        // associations can be defined here
        Review.belongsTo(models.Product, {
            foreignKey: 'prod_Id',
            onDelete: 'CASCADE'
        })
    };
    return Review;
};