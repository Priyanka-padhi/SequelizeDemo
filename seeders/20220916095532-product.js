'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [{
      title:"Watch",
      price:2500,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        title:"T-shirt",
        price:500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title:"Keyboard",
        price:1500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title:"Laptop",
        price:52500,
        createdAt: new Date(),
        updatedAt: new Date()
      }
     ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
