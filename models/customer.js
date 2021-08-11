module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define('customers', {
    id: {
      type: Sequelize.INTEGER, 
      primaryKey: true, 
      autoIncrement: true, 
      allowNull: false
    },
    firstName: { 
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    phoneNumber: {
      type: Sequelize.BIGINT
    },
    email: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.SMALLINT
    },
    isDeleted: {
      type: Sequelize.BOOLEAN
    },
    //Foreign Keys
    branchId: {
      type: Sequelize.INTEGER
    }
  });
  return Customer;
};