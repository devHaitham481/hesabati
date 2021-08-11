module.exports = (sequelize, Sequelize) => {
    const RestaurantType = sequelize.define('restaurant_types', {
        id: {
            type: Sequelize.INTEGER, 
            primaryKey: true,
            autoIncrement: true, 
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            notEmpty: true,
            notNull: true
        },

        // Foreign Keys
        restaurantId: {
            type: Sequelize.INTEGER
        }
    });

    return RestaurantType;
};