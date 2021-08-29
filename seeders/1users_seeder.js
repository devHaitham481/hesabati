'use strict';
const faker = require('faker');




module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = [];
    let amount = 10;
    let lang = ['en','ar'];
    let genders = [ 'female' , 'male' ];

    while(amount--) {
      data.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(), 
        phoneNumber: faker.datatype.number(),
        address: faker.address.streetAddress(),
        gender: faker.random.arrayElement(genders),
        salt: faker.internet.password(),
        language:faker.random.arrayElement(lang),
        password: faker.internet.password(),
        createdAt: new Date,
        updatedAt: new Date
      });
    }
    return queryInterface.bulkInsert('users', data, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('users', null, {
      truncate: true,
      cascade: true,
      restartIdentity:true
    });
  }
};