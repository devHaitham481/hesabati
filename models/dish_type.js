module.exports = (sequelize, Sequelize) => {
    const DishType = sequelize.define('dish_types', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true, 
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING
        },
        isDeleted: {
            type: Sequelize.BOOLEAN
        }
    });
    return DishType;
};