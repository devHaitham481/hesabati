module.exports = (sequelize, Sequelize) => {
    const Table = sequelize.define('tables', {
        id: {
            type: Sequelize.INTEGER, 
            primaryKey: true,
            autoIncrement: true, 
            allowNull: false
        },
        status: {
            type: Sequelize.STRING(45),
            notEmpty: true,
            notNull: true,
            isIn: [['available', 'reserved', 'waiting']]
        },
        numberOfPeople: {
            type: Sequelize.INTEGER
        },
        x: {
            type: Sequelize.SMALLINT
        },
        y: {
            type: Sequelize.SMALLINT
        },
        floorNumber: {
            type: Sequelize.INTEGER
        },
        is_vip: {
            type: Sequelize.BOOLEAN
        },
        is_open: {
            type: Sequelize.INTEGER
        }
        // Foreign Keys
        //restaurantBranchId 
        
    });

    return Table;
};