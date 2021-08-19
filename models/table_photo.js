module.exports = (sequelize, Sequelize) => {
    const TablePhoto = sequelize.define('table_photos', {
        id: {
            type: Sequelize.INTEGER, 
            primaryKey: true, 
            autoIncrement: true,
            allowNull: false
        },
        image: {
            type: Sequelize.STRING
        },
        //Foreign Keys
        //tableId

    });
    return TablePhoto;
};