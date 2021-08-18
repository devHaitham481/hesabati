module.exports = (sequelize, Sequelize) => {
    const District = sequelize.define('districts', {
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
        isDeleted: {
            type: Sequelize.BOOLEAN
        }
        // Foreign Keys
        // cityId: {
        //     type: Sequelize.INTEGER
        // }
    });

    return District;
};