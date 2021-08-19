module.exports = (sequelize, Sequelize) => {
    const Menu = sequelize.define('menues', {
        id: {
            type: Sequelize.INTEGER, 
            primaryKey: true, 
            autoIncrement: true, 
            allowNull: false
        },
        dishName: {
            type: Sequelize.STRING
        },
        dishDescription: {
            type: Sequelize.TEXT
        },
        dishPrice: {
            type: Sequelize.FLOAT
        },
        isDeleted: {
            type: Sequelize.BOOLEAN
        },
        photo: {
            type: Sequelize.STRING
        },
        // Foreign Keys
        branchId: {
            type: Sequelize.INTEGER
        },
        dishTypeId: {
            type: Sequelize.INTEGER
        },
        dishClassificationId: {
            type: Sequelize.INTEGER
        }
    });
    return Menu;
};