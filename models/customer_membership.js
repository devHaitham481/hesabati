module.exports = (sequelize, Sequelize) => {
    const CustomerMembership = sequelize.define('customer_memberships', {
        id: {
            type: Sequelize.INTEGER, 
            primaryKey: true,
            autoIncrement: true, 
            allowNull: false
        },
        // Foreign Keys
        customerId: {
            type: Sequelize.INTEGER
        },
        membershipTypeId: {
            type: Sequelize.INTEGER
        }
    });

    return CustomerMembership;
};