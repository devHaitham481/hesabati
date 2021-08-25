module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define('orders', {
        id: {
            type: Sequelize.INTEGER, 
            primaryKey: true, 
            autoIncrement: true,
            allowNull: false
        },
        // Foreign Keys
        // customerId: {
        //     type: Sequelize.INTEGER
        // },
        // dishId: {
        //     type: Sequelize.INTEGER
        // },
        // reservationId: {
        //     type: Sequelize.INTEGER
        // },
        // branchId: {
        //     type: Sequelize.INTEGER
        // }
    });
    return Order;
};