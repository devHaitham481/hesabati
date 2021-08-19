const crypto = require('crypto');

module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define('customers', {
    id: {
      type: Sequelize.INTEGER, 
      primaryKey: true, 
      autoIncrement: true, 
      allowNull: false
    },
    firstName_en: { 
      type: Sequelize.STRING
    },
    firstName_ar: {
      type: Sequelize.STRING
    },

    lastName_en: {
      type: Sequelize.STRING
    },
    lastName_ar: {
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
    password: {
      type: Sequelize.STRING, 
      get() { 
        return () => this.getDataValue('password')
      }
    }, 
    avatar: {
      type: Sequelize.STRING
    },
    address_en: {
      type: Sequelize.STRING
    },
    address_ar: {
      type: Sequelize.STRING
    },
    countryCode: {
      type: Sequelize.CHAR(25)
    },
    registrationType: {
      type: Sequelize.ENUM,
      values: ['active', 'pending', 'deleted']
    }, 
    registrationSource: {
      type: Sequelize.ENUM,
      values: ['backend', 'ios', 'android']
    },
    latitude: {
      type: Sequelize.DOUBLE,
      allowNull: true
    },
    longitude: {
      type: Sequelize.DOUBLE,
      allowNull: true
    },
    token: {
      type: Sequelize.STRING,
      allowNull: true
    },
    status: {
      type: Sequelize.SMALLINT
    },
    // Foreign Keys
    // branchId: {
    //   type: Sequelize.INTEGER
    // },
    salt: {
      type: Sequelize.STRING, 
      notEmpty: true, 
      notNull: true,
      get () {
        return () => this.getDataValue('salt')
      }
    }
  });

  Customer.generateSalt = function() { 
    return crypto.randomBytes(16).toString('base64')
  }
  Customer.encryptPassword = function (plainText, salt) { 
    return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
  }

  const setSaltAndPassword = customer => { 
    if (customer.changed('password')) {
      customer.salt = Customer.generateSalt()
      customer.password = Customer.encryptPassword(customer.password(), customer.salt())
    }
  }

  Customer.prototype.verifyPassword = function(enteredPassword) { 
    return Customer.encryptPassword(enteredPassword, this.salt()) === this.password()
  }

  Customer.beforeCreate(setSaltAndPassword)
  Customer.beforeUpdate(setSaltAndPassword)

  
  return Customer;
};