'use strict';
const faker = require('faker');




module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = [];
    let amount = 50;
    let genders = [ 'female' , 'male' ];
    let sources = ['backend', 'ios', 'android'];
    let type = ['active', 'pending', 'deleted'];

    while(amount--) {
      data.push({
        firstName_en: faker.name.firstName(),
        lastName_en: faker.name.lastName(),
        firstName_ar: faker.name.firstName(),
        lastName_ar: faker.name.lastName(),
        email: faker.internet.email(), 
        phoneNumber: faker.datatype.number(),
        address_en: faker.address.streetAddress(),
        address_ar: faker.address.streetAddress(),
        isDeleted:faker.datatype.boolean(),
        countryCode:faker.address.countryCode(),
        avatar:faker.image.avatar(),
        gender: faker.random.arrayElement(genders),
        registrationType:faker.random.arrayElement(type),
        registrationSource:faker.random.arrayElement(sources),
        salt: faker.internet.password(),
        password: faker.internet.password(),
        longitude:faker.address.longitude(),
        latitude:faker.address.latitude(),
        token:faker.internet.password(),
        status:faker.datatype.number({min:0,max:100}),
        createdAt: new Date,
        updatedAt: new Date
      });
    }
    return queryInterface.bulkInsert('customers', data, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('customers', null, {});
  }
};