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
        star: {
            type: Sequelize.FLOAT
        },
        // Foreign Keys
        // customerId: {
        //     type: Sequelize.INTEGER
        // },
        // branchId: {
        //     type: Sequelize.INTEGER
        // }

    });

    return Feedback;
};