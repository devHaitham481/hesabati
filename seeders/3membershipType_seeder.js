'use strict';
const faker = require('faker');




module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = [];
    let amount = 10;

    while(amount--) {
      data.push({
        name:faker.name.title(),
        discount:faker.datatype.float(),
        restaurantId:faker.datatype.number({min:1,max:10}),
        createdAt:new Date,
        updatedAt:new Date
      });
    }
    return queryInterface.bulkInsert('membership_types', data, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('membership_types', null, {
      truncate: true,
      cascade: true,
      restartIdentity:true
    });
  }
};