'use strict';
const faker = require('faker');




module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = [];
    let amount = 10;

    while(amount--) {
      data.push({
        name: faker.address.streetAddress(),
        isDeleted:faker.datatype.boolean(),
        cityId:faker.datatype.number({min:1,max:10}),
        createdAt: new Date,
        updatedAt: new Date
      });
    }
    return queryInterface.bulkInsert('districts', data, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('districts', null, {
      truncate: true,
      cascade: true,
      restartIdentity:true
    });
  }
};