'use strict';
const faker = require('faker');




module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = [];
    let amount = 10;
    let genders = [ 'female' , 'male' ];
    let sources = ['backend', 'ios', 'android'];
    let type = ['active', 'pending', 'deleted'];
    let lang = ['en','ar'];

    while(amount--) {
      data.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(), 
        phoneNumber: faker.datatype.number(),
        address: faker.address.streetAddress(),
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
        status:faker.datatype.number({min:0,max:10}),
        language:faker.random.arrayElement(lang),
        createdAt: new Date,
        updatedAt: new Date
      });
    }
    return queryInterface.bulkInsert('customers', data, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('customers', null, {
      truncate: true,
      cascade: true,
      restartIdentity:true
    });
  }
};