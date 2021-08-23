'use strict';
const faker = require('faker');




module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = [];
    let amount = 20;

    while(amount--) {
      data.push({
        fullName: faker.name.firstName(),
        createdAt: new Date,
        updatedAt: new Date
      });
    }
    return queryInterface.bulkInsert('reservation_guests', data, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('reservation_guests', null, {});
  }
};