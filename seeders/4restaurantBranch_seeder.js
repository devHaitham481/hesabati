'use strict';
const faker = require('faker');




module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = [];
    let amount = 10;

    while(amount--) {
      data.push({
        name: faker.name.firstName(),
        description: faker.name.lastName(),
        email:faker.internet.email(),
        phoneNumber: faker.datatype.number(),
        address: faker.address.streetAddress(),
        locationAddress:faker.address.streetAddress(),
        locationCity:faker.address.city(),
        isDeleted:faker.datatype.boolean(),
        isActive:faker.datatype.boolean(),
        hasParking:faker.datatype.boolean(),
        country_code:faker.address.countryCode(),
        status:faker.datatype.number({min:0,max:100}),
        instruction:faker.name.lastName(),
        image:faker.image.avatar(),
        longitude:faker.address.longitude(),
        latitude:faker.address.latitude(),
        workingHours:faker.random.words(),
        workingDays:faker.date.weekday(),
        offDays:faker.date.weekday(),
        restaurantId:faker.datatype.number({min:1,max:10}),
        cityId:faker.datatype.number({min:1,max:10}),
        districtId:faker.datatype.number({min:1,max:10}),
        createdAt: new Date,
        updatedAt: new Date
      });
    }
    return queryInterface.bulkInsert('restaurant_branches', data, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('restaurant_branches', null, {
      truncate: true,
      cascade: true,
      restartIdentity:true
    });
  }
};