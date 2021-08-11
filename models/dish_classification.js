module.exports = (sequelize, Sequelize) => {
    const DishClassification = sequelize.define('dish_classifications', {
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
    return DishClassification;
};