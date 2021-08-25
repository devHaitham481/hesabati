'use strict';
const faker = require('faker');




module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = [];
    let amount = 10;

    while(amount--) {
      data.push({
        image: faker.image.avatar(),
        tableId:faker.datatype.number({min:1,max:10}),
        createdAt: new Date,
        updatedAt: new Date
      });
    }
    return queryInterface.bulkInsert('table_photos', data, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('table_photos', null,{
      truncate: true,
      cascade: true,
      restartIdentity:true
    });
  }
};