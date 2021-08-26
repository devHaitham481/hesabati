module.exports = (sequelize, Sequelize) => {
    const MenuLocale = sequelize.define('menues_locale', {
        id: {
            type: Sequelize.INTEGER, 
            primaryKey: true, 
            autoIncrement: true, 
            allowNull: false
        },
        dishName_ar: {
            type: Sequelize.TEXT
        },
        dishDescription_ar: {
            type: Sequelize.TEXT
        },
    });
    return MenuLocale;
};