'use strict';
const faker = require('faker');




module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = [];
    let amount = 10;

    while(amount--) {
      data.push({
        fullName: faker.name.firstName(),
        reservationId:faker.datatype.number({min:1,max:10}),
        createdAt: new Date,
        updatedAt: new Date
      });
    }
    return queryInterface.bulkInsert('reservation_guests', data, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('reservation_guests', null, {
      truncate: true,
      cascade: true,
      restartIdentity:true
    });
  }
};