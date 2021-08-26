module.exports = (sequelize, Sequelize) => {
    const DishClassificationLocale = sequelize.define('dish_classifications_locale', {
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
    return DishClassificationLocale;
};