module.exports = (sequelize, Sequelize) => {
    const Restaurant = sequelize.define('restaurants', {
      id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: { 
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING,
      },
      ownerId: {
        type: Sequelize.INTEGER
      },
      isDeleted: {
        type: Sequelize.BOOLEAN
      }
    });
    return Restaurant;
  };