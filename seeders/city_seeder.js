'use strict';
const faker = require('faker');




module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = [];
    let amount = 20;

    while(amount--) {
      data.push({
        name_en: faker.address.city(),
        name_ar: faker.address.city(),
        status: faker.datatype.number({min:0,max:100}),
        isDeleted:faker.datatype.boolean(),
        code:faker.address.countryCode(),
        createdAt: new Date,
        updatedAt: new Date
      });
    }
    return queryInterface.bulkInsert('cities', data, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('cities', null, {});
  }
};