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
            type: Sequelize.STRING,
            isIn: [['user','customer']]
        },
        sourceId: {
            type: Sequelize.INTEGER
        },
        sourceType: {
            type: Sequelize.STRING,
            isIn: [['user','customer']]
        },
        isNew:{
            type:Sequelize.BOOLEAN,
            defaultValue:true
        }
        // Foreign Keys
    });

    return Notification;
};