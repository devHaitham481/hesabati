'use strict';
const faker = require('faker');




module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = [];
    let amount = 50;
    let genders = [ 'female' , 'male' ];

    while(amount--) {
      let date = new Date();
      data.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(), 
        phoneNumber: faker.datatype.number(),
        address: faker.address.streetAddress(),
        gender: faker.random.arrayElement(genders),
        salt: faker.internet.password(),
        password: faker.internet.password(),
        createdAt: date,
        updatedAt: date
      });
    }
    return queryInterface.bulkInsert('users', data, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('users', null, {});
  }
};
