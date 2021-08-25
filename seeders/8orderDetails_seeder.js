'use strict';
const faker = require('faker');




module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = [];
    let amount = 10;

    while(amount--) {
      data.push({
        orderId:faker.datatype.number({min:1,max:10}),
        menueId:faker.datatype.number({min:1,max:10}),
        createdAt: new Date,
        updatedAt: new Date
      });
    }
    return queryInterface.bulkInsert('order_details', data, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('order_details', null, {
      truncate: true,
      cascade: true,
      restartIdentity:true
    });
  }
};