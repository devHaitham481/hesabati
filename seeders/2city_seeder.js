'use strict';
const faker = require('faker');




module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = [];
    let amount = 10;

    while(amount--) {
      data.push({
        name: faker.address.city(),
        status: faker.datatype.number({min:0,max:10}),
        isDeleted:faker.datatype.boolean(),
        code:faker.address.countryCode(),
        countryId:faker.datatype.number({min:1,max:10}),
        createdAt: new Date,
        updatedAt: new Date
      });
    }
    return queryInterface.bulkInsert('cities', data, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('cities', null, {
      truncate: true,
      cascade: true,
      restartIdentity:true
    });
  }
};