'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Reviews', [{
      rating:8,
      description:"Good",
      prod_Id:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        rating:7,
        description:"Good",
        prod_Id:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating:7,
        description:"Good",
        prod_Id:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating:8,
        description:"Good",
        prod_Id:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating:7,
        description:"Good",
        prod_Id:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating:10,
        description:"Very Good",
        prod_Id:4,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
