module.exports = (sequelize, Sequelize) => {
    const Restaurant = sequelize.define('restaurants', {
      id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: { 
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING,
      },
      isDeleted: {
        type: Sequelize.BOOLEAN
      }
    });
    return Restaurant;
  };