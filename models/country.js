module.exports = (sequelize, Sequelize) => {
    const Country = sequelize.define('countries', {
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
        isDeleted: {
            type: Sequelize.INTEGER
        }
    });

    return Country;
};
