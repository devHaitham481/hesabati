'use strict';
const faker = require('faker');




module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = [];
    let amount = 50;

    while(amount--) {
      data.push({
        name_en: faker.name.firstName(),
        companyName_en: faker.name.lastName(),
        name_ar: faker.name.firstName(),
        companyName_ar: faker.name.lastName(),
        phoneNumber: faker.datatype.number(),
        address: faker.address.streetAddress(),
        isDeleted:faker.datatype.boolean(),
        countryCode:faker.address.countryCode(),
        image:faker.image.avatar(),
        longitude:faker.address.longitude(),
        latitude:faker.address.latitude(),
        createdAt: new Date,
        updatedAt: new Date
      });
    }
    return queryInterface.bulkInsert('restaurants', data, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('restaurants', null, {});
  }
};