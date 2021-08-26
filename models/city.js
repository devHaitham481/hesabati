module.exports = (sequelize, Sequelize) => {
    const City = sequelize.define('cities', {
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
        code: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.SMALLINT
        },
        isDeleted: {
            type: Sequelize.BOOLEAN
        }
        // Foreign Keys
        // countryId: {
        //     type: Sequelize.INTEGER
        // }
    });

    return City;
};
