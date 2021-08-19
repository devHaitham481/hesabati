module.exports = (sequelize, Sequelize) => {
    const Menu = sequelize.define('menues', {
        id: {
            type: Sequelize.INTEGER, 
            primaryKey: true, 
            autoIncrement: true, 
            allowNull: false
        },
        dishName: {
<<<<<<< HEAD
            type: Sequelize.STRING
=======
            type: Sequelize.TEXT
>>>>>>> shadi-dev
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
<<<<<<< HEAD
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
=======
        // // Foreign Keys
        // branchId: {
        //     type: Sequelize.INTEGER
        // },
        // dishTypeId: {
        //     type: Sequelize.INTEGER
        // },
        // dishClassificationId: {
        //     type: Sequelize.INTEGER
        // }
>>>>>>> shadi-dev
    });
    return Menu;
};