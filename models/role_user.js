module.exports = (sequelize, Sequelize) => {
    const RoleUser = sequelize.define('role_users', {
        id: {
            type: Sequelize.INTEGER, 
            primaryKey: true, 
            autoIncrement: true,
            allowNull: false
        }


        //Foreign Keys
        //userId
        //roleId

    });
    return RoleUser;
};