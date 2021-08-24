'use strict';
const faker = require('faker');




module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = [];
    let amount = 10;

    while(amount--) {
      data.push({
        dishName:faker.name.title(),
        dishDescription:faker.name.title(),
        dishPrice:faker.datatype.float(),
        isDeleted:faker.datatype.boolean(),
        photo:faker.image.avatar(),
        dishTypeId:faker.datatype.number({min:1,max:10}),
        dishClassificationId:faker.datatype.number({min:1,max:10}),
        restaurantBranchId:faker.datatype.number({min:1,max:10}),
        createdAt:new Date,
        updatedAt:new Date
      });
    }
    return queryInterface.bulkInsert('menues', data, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('menues', null, {
      truncate: true,
      cascade: true,
      restartIdentity:true
    });
  }
};