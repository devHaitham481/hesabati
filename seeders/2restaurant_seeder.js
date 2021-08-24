'use strict';
const faker = require('faker');




module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = [];
    let amount = 10;

    while(amount--) {
      data.push({
        name_en: faker.name.firstName(),
        companyName_en: faker.name.lastName(),
        name_ar: faker.name.firstName(),
        companyName_ar: faker.name.lastName(),
        aboutUs: faker.lorem.paragraph(),
        phoneNumber: faker.datatype.number(),
        address: faker.address.streetAddress(),
        isDeleted:faker.datatype.boolean(),
        countryCode:faker.address.countryCode(),
        image:faker.image.avatar(),
        longitude:faker.address.longitude(),
        latitude:faker.address.latitude(),
        restaurantTypeId:faker.datatype.number({min:1,max:10}),
        userId:faker.datatype.number({min:1,max:10}),
        categoryId:faker.datatype.number({min:1,max:10}),
        createdAt: new Date,
        updatedAt: new Date
      });
    }
    return queryInterface.bulkInsert('restaurants', data, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('restaurants', null, {
      truncate: true,
      cascade: true,
      restartIdentity:true
    });
  }
};