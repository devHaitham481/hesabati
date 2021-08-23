'use strict';
const faker = require('faker');




module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = [];
    let amount = 120;

    while(amount--) {
      data.push({
        image: faker.image.avatar(),
        imageClassification: faker.image.avatar(),
        createdAt: new Date,
        updatedAt: new Date
      });
    }
    return queryInterface.bulkInsert('restaurant_photos', data, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('restaurant_photos', null, {});
  }
};