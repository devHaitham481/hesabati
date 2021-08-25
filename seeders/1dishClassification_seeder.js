'use strict';
const faker = require('faker');




module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = [];
    let amount = 10;

    while(amount--) {
      data.push({
        name:faker.name.title(),
        isDeleted:faker.datatype.boolean(),
        createdAt:new Date,
        updatedAt:new Date
      });
    }
    return queryInterface.bulkInsert('dish_classifications', data, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('dish_classifications', null, {
      truncate: true,
      cascade: true,
      restartIdentity:true
    });
  }
};