'use strict';
const faker = require('faker');




module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = [];
    let amount = 10;

    while(amount--) {
      data.push({
        name: faker.name.title(),
        photo: faker.image.avatar(),
        createdAt: new Date,
        updatedAt: new Date
      });
    }
    return queryInterface.bulkInsert('restaurant_types', data, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('restaurant_types', null, {
      truncate: true,
      cascade: true,
      restartIdentity:true
    });
  }
};