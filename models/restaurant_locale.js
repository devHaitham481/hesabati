module.exports = (sequelize, Sequelize) => {
    const RestaurantLocale = sequelize.define('restaurants_locale', {
      id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name_ar: { 
        type: Sequelize.STRING
      },
      aboutUs_ar:{
        type:Sequelize.TEXT
      },
      address_ar: {
        type: Sequelize.TEXT
      },
      });
      //Foreign Keys
      //userId
      //CategoryId
      return RestaurantLocale;
    };