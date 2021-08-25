module.exports = (sequelize, Sequelize) => {
    const OrderDetails = sequelize.define('order_details', {
        id: {
            type: Sequelize.INTEGER, 
            primaryKey: true, 
            autoIncrement: true,
            allowNull: false
        }
    });
    return OrderDetails;
};