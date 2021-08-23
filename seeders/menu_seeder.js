'use strict';
const faker = require('faker');




module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = [];
    let amount = 200;

    while(amount--) {
      data.push({
        dishName:faker.name.title(),
        dishDescription:faker.name.title(),
        dishPrice:faker.datatype.float(),
        isDeleted:faker.datatype.boolean(),
        photo:faker.image.avatar(),
        createdAt:new Date,
        updatedAt:new Date
      });
    }
    return queryInterface.bulkInsert('menues', data, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('menues', null, {});
  }
};