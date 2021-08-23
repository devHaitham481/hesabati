'use strict';
const faker = require('faker');




module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = [];
    let amount = 20;

    while(amount--) {
      data.push({
        image: faker.image.avatar(),
        createdAt: new Date,
        updatedAt: new Date
      });
    }
    return queryInterface.bulkInsert('table_photos', data, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('table_photos', null, {});
  }
};