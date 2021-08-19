module.exports = (sequelize, Sequelize) => {
    const PermissionRole = sequelize.define('permission_roles', {
        id: {
            type: Sequelize.INTEGER, 
            primaryKey: true, 
            autoIncrement: true,
            allowNull: false
        }




        //Foreign Keys 
        //permissionId
        //roleId

    });
    return PermissionRole;
};