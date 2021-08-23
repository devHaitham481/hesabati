'use strict';
const faker = require('faker');




module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = [];
    let amount = 100;
    let status = ['available', 'reserved', 'waiting'];

    while(amount--) {
      data.push({
        status: faker.random.arrayElement(status),
        numberOfPeople:faker.datatype.number({min: 0, max: 10}),
        x:faker.datatype.number({min: 0, max: 10}),
        y:faker.datatype.number({min: 0, max: 10}),
        floorNumber:faker.datatype.number({min: 0, max: 5}),
        is_vip:faker.datatype.boolean(),
        is_open:faker.datatype.boolean(),
        createdAt: new Date,
        updatedAt: new Date
      });
    }
    return queryInterface.bulkInsert('tables', data, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('tables', null, {});
  }
};