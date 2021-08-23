module.exports = (sequelize, Sequelize) => {
    const Menu = sequelize.define('menues', {
        id: {
            type: Sequelize.INTEGER, 
            primaryKey: true, 
            autoIncrement: true, 
            allowNull: false
        },
        dishName: {
            type: Sequelize.TEXT
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
// <<<<<<< HEAD
        photo: {
            type: Sequelize.STRING
        },
        // Foreign Keys
// <<<<<<< HEAD
// =======
        branchId: {
            type: Sequelize.INTEGER
        },
        dishTypeId: {
            type: Sequelize.INTEGER
        },
        dishClassificationId: {
            type: Sequelize.INTEGER
        }
// =======
        // // Foreign Keys
// >>>>>>> 6d329d123ada3de6de2d5f6d2f5fabf8f2d9f2bf
        // branchId: {
        //     type: Sequelize.INTEGER
        // },
        // dishTypeId: {
        //     type: Sequelize.INTEGER
        // },
        // dishClassificationId: {
        //     type: Sequelize.INTEGER
        // }
// <<<<<<< HEAD
// =======
// >>>>>>> shadi-dev
// >>>>>>> 6d329d123ada3de6de2d5f6d2f5fabf8f2d9f2bf
    });
    return Menu;
};