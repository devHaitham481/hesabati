module.exports = (sequelize, Sequelize) => {
    const Notification = sequelize.define('notifications', {
        id: {
            type: Sequelize.INTEGER, 
            primaryKey: true,
            autoIncrement: true, 
            allowNull: false
        },
        notificationBody: {
            type: Sequelize.STRING,
            notEmpty: true,
            notNull: true
        },
        destinationId: {
            type: Sequelize.INTEGER
        },
        destinationType: {
            type: Sequelize.STRING
        },
        sourceId: {
            type: Sequelize.INTEGER
        },
        sourceType: {
            type: Sequelize.STRING
        },
        // Foreign Keys
    });

    return Notification;
};