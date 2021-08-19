module.exports = (sequelize, Sequelize) => {
    const RestaurantPhoto = sequelize.define('restaurant_photos', {
        id: {
            type: Sequelize.INTEGER, 
            primaryKey: true, 
            autoIncrement: true,
            allowNull: false
        },
        image: {
            type: Sequelize.STRING
        },
        imageClassification: {
            type: Sequelize.STRING
        }

    });
    return RestaurantPhoto;
};