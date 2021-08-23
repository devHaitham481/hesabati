'use strict';
const faker = require('faker');




module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = [];
    let amount = 20;

    while(amount--) {
      data.push({
        name_en: faker.name.title(),
        name_ar: faker.name.title(),
        createdAt: new Date,
        updatedAt: new Date
      });
    }
    return queryInterface.bulkInsert('categories', data, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('categories', null, {});
  }
};