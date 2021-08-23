'use strict';
const faker = require('faker');




module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = [];
    let amount = 50;
    let status=['cancelled', 'attended', 'active'];

    while(amount--) {
      data.push({
        date: new Date,
        status:faker.random.arrayElement(status),
        specialRequest:faker.name.lastName(),
        occassion:faker.name.lastName(),
        numberOfGuests:faker.datatype.number({min: 0, max: 10}),
        createdAt: new Date,
        updatedAt: new Date
      });
    }
    return queryInterface.bulkInsert('reservations', data, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('reservations', null, {});
  }
};