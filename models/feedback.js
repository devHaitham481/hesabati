module.exports = (sequelize, Sequelize) => {
    const Feedback = sequelize.define('feedbacks', {
        id: {
            type: Sequelize.INTEGER, 
            primaryKey: true,
            autoIncrement: true, 
            allowNull: false
        },
        comment: {
            type: Sequelize.STRING,
            notEmpty: true,
            notNull: true
        },
        rating: {
            type: Sequelize.SMALLINT
        },
        // Foreign Keys
        customerId: {
            type: Sequelize.INTEGER
        },
        branchId: {
            type: Sequelize.INTEGER
        }

    });

    return Feedback;
};