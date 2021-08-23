'use strict';
const faker = require('faker');




module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = [];
    let amount = 20;

    while(amount--) {
      data.push({
        name_en: faker.address.country(),
        name_ar: faker.address.country(),
        tel: faker.address.countryCode(),
        isDeleted:faker.datatype.boolean(),
        code:faker.address.countryCode(),
        createdAt: new Date,
        updatedAt: new Date
      });
    }
    return queryInterface.bulkInsert('countries', data, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('countries', null, {});
  }
};