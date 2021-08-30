'use strict';
const faker = require('faker');




module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = [];
    let amount = 10;

    let Type=['user','customer'];

    while(amount--) {
      data.push({
        notificationBody:faker.name.title(),
        isNew:faker.datatype.boolean(),
        destinationId:faker.datatype.number({min:1,max:10}),
        destinationType:faker.random.arrayElement(Type),
        sourceId:faker.datatype.number({min:1,max:10}),
        sourceType:faker.random.arrayElement(Type),
        createdAt:new Date,
        updatedAt:new Date
      });
    }
    return queryInterface.bulkInsert('notifications', data, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('notifications', null, {
      truncate: true,
      cascade: true,
      restartIdentity:true
    });
  }
};