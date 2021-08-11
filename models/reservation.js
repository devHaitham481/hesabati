module.exports = (sequelize, Sequelize) => { 
    const Reservation = sequelize.define('reservations', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        date: {
            type: Sequelize.DATE
        },
        time: {
            type: Sequelize.TIME
        },
        numberOfGuests: {
            type: Sequelize.INTEGER
        },
        status: {
            type: Sequelize.ARRAY(Sequelize.TEXT),
            isIn: [['available', 'reserved', 'Waiting']]
        },
        isDeleted: {
            type: Sequelize.BOOLEAN
        },
        // Foreign Keys
        branchId: {
            type: Sequelize.INTEGER
        },
        customerId: {
            type: Sequelize.INTEGER
        }
    });
    return Reservation;
};
