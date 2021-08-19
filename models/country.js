module.exports = (sequelize, Sequelize) => {
    const Country = sequelize.define('countries', {
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
        },
        tel: {
            type: Sequelize.STRING
        },
        code: {
            type: Sequelize.STRING
        },
        // Foreign Keys
        isDeleted: {
            type: Sequelize.BOOLEAN
        }
    });

    return Country;
};
