module.exports = (sequelize, Sequelize) => {
    const ReservationGuest = sequelize.define('reservation_guests', {
        id: {
            type: Sequelize.INTEGER, 
            primaryKey: true,
            autoIncrement: true, 
            allowNull: false
        },
        fullName: {
            type: Sequelize.STRING,
            notEmpty: true,
            notNull: true
        },
        // // Foreign Keys
        // reservationId: {
        //     type: Sequelize.INTEGER
        // }
    });

    return ReservationGuest;
};
