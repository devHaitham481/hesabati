module.exports = (sequelize, Sequelize) => {
    const PermissionUser = sequelize.define('permission_user', {
        id: {
            type: Sequelize.INTEGER, 
            primaryKey: true, 
            autoIncrement: true,
            allowNull: false
        }
        




        //Foreign Keys 
        //userId
        //permissionId

    });
    return PermissionUser;
};