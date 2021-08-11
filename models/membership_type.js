module.exports = (sequelize, Sequelize) => {
    const MembershipType = sequelize.define('membership_types', {
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
        discount: {
            type: Sequelize.FLOAT
        },

        // Foreign Keys
        restaurantId: {
            type: Sequelize.INTEGER
        }
    });

    return MembershipType;
};