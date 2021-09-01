'use strict';
const faker = require('faker');




module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = [];
    let amount = 10;

    while(amount--) {
      data.push({
        comment:faker.name.title(),
        star:faker.datatype.number({min:0,max:5}),
        customerId:faker.datatype.number({min:1,max:10}),
        restaurantBranchId:faker.datatype.number({min:1,max:10}),
        createdAt:new Date,
        updatedAt:new Date
      });
    }
    return queryInterface.bulkInsert('feedbacks', data, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('feedbacks', null, {
      truncate: true,
      cascade: true,
      restartIdentity:true
    });
  }
};