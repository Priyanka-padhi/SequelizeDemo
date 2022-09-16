const {Product,Review}= require('./models');
const Sequelize =require('sequelize');
const Op = Sequelize.Op                   // SQL operators are included in the library in the form of the Op object.

//Query to test the association

const findAll = async () => {
    try{
        const products = await Product.findAll({

            include: [{                             //eager loading: querying data from multiple models at the same time
                model: Review,

            }]
        });
        console.log("All Products with their associated reviews: ", JSON.stringify(products, null, 4));
    }
    catch (error){
        console.log("Association failed...");

    }

}

const run = async () => {
    await findAll()
    await process.exit()
}

run()