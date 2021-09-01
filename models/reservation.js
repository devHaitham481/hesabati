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
            type: Sequelize.STRING,
            validate: {
            isIn: [['cancelled', 'attended', 'active']]
            }
        },
        specialRequest: {
            type: Sequelize.TEXT
        },
        occassion: {
            type: Sequelize.TEXT
        },
        isDeleted: {
            type: Sequelize.BOOLEAN
        }, 

          

        // Foreign Keys
        //tableId
        //restaurantBranchId
        //customerId

    });
    // Reservation.beforeCreate(reservation => {
    //     if(reservation) {}

    
    return Reservation;
}
