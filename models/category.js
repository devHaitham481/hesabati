module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define('categories', {
        id: {
            type: Sequelize.INTEGER, 
            primaryKey: true,
            autoIncrement: true, 
            allowNull: false
        },
        name_en: {
            type: Sequelize.STRING,
            notEmpty: true,
            notNull: true
        },
        name_ar: {
            type: Sequelize.STRING
        }
    });

    return Category;
};