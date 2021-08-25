'use strict';
const faker = require('faker');




module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = [];
    let amount = 10;

    while(amount--) {
      data.push({
        customerId:faker.datatype.number({min:1,max:10}),
        membershipTypeId:faker.datatype.number({min:1,max:10}),
        createdAt: new Date,
        updatedAt: new Date
      });
    }
    return queryInterface.bulkInsert('customer_memberships', data, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('customer_memberships', null, {
      truncate: true,
      cascade: true,
      restartIdentity:true
    });
  }
};