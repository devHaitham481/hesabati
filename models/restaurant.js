  module.exports = (sequelize, Sequelize) => {
  const Restaurant = sequelize.define('restaurants', {
    id: { 
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name_en: { 
      type: Sequelize.STRING
    },
    name_ar: {
      type: Sequelize.STRING
    },
    companyName_en: {
      type: Sequelize.STRING
    },
    companyName_en: {
      type: Sequelize.STRING
    },
    companyName_ar: {
      type: Sequelize.STRING
    },
    phoneNumber: {
      type: Sequelize.INTEGER
    },
    address: {
      type: Sequelize.TEXT
    },
    latitude: {
      type: Sequelize.DECIMAL
    },
    longitude: {
      type: Sequelize.DECIMAL
    }, 
    image: {
      type: Sequelize.STRING
    },
    countryCode: {
      type: Sequelize.CHAR
    },
    restaurantRegisterDocument: {
      type: Sequelize.STRING
    },
    isDeleted: {
    type: Sequelize.BOOLEAN
    }
    });
    //Foreign Keys
    //userId
    //CategoryId
    return Restaurant;
  };