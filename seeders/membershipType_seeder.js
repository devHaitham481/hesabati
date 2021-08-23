'use strict';
const faker = require('faker');




module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = [];
    let amount = 40;

    while(amount--) {
      data.push({
        name:faker.name.title(),
        discount:faker.datatype.float(),
        createdAt:new Date,
        updatedAt:new Date
      });
    }
    return queryInterface.bulkInsert('membership_types', data, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('membership_types', null, {});
  }
};