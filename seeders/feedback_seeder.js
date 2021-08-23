'use strict';
const faker = require('faker');




module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = [];
    let amount = 200;

    while(amount--) {
      data.push({
        comment:faker.name.title(),
        rating:faker.datatype.number({min:0,max:5}),
        createdAt:new Date,
        updatedAt:new Date
      });
    }
    return queryInterface.bulkInsert('feedbacks', data, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('feedbacks', null, {});
  }
};