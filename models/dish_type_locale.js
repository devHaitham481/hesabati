module.exports = (sequelize, Sequelize) => {
    const DishTypeLocale = sequelize.define('dish_types_locale', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true, 
            autoIncrement: true,
            allowNull: false
        },
        name_ar: {
            type: Sequelize.STRING
        }
    });
    return DishTypeLocale;
};