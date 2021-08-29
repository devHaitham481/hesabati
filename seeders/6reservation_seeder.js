'use strict';
const faker = require('faker');




module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = [];
    let amount = 10;
    let status=['cancelled', 'attended', 'active'];
    let times =['01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00',
    '13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00'];

    while(amount--) {
      data.push({
        date: new Date,
        time:faker.random.arrayElement(times),
        status:faker.random.arrayElement(status),
        specialRequest:faker.name.lastName(),
        occassion:faker.name.lastName(),
        isDeleted:faker.datatype.boolean(),
        numberOfGuests:faker.datatype.number({min: 0, max: 10}),
        customerId:faker.datatype.number({min:1,max:10}),
        restaurantBranchId:faker.datatype.number({min:1,max:10}),
        tableId:faker.datatype.number({min:1,max:10}),
        createdAt: new Date,
        updatedAt: new Date
      });
    }
    return queryInterface.bulkInsert('reservations', data, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('reservations', null,{
      truncate: true,
      cascade: true,
      restartIdentity:true
    });
  }
};