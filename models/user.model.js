const crypto = require('crypto')
 
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    email: {
      type: Sequelize.STRING,
      set: function (val) {
        this.setDataValue('email', val.toLowerCase());
      },
      notEmpty: true,
      notNull: false,
      unique: true
    },
    username: { 
						type: Sequelize.STRING, 
						set: function(val) { 
										this.setDataValue('username', val.toLowerCase());
						},
						notEmpty: true, 
						notNull: false, 
				},

    phonenumber: { 
	    type: Sequelize.BIGINT(12), 
	    notNull: true, 
	    unique: true, 
	    notEmpty: true

    },

    password: {
      type: Sequelize.STRING,
      get() {
        return () => this.getDataValue('password')
      }
    }, 

    salt: {
      type: Sequelize.STRING,
      notEmpty: true,
      notNull: true,
      get() {
        return () => this.getDataValue('salt')
      }
    }
  });

  User.generateSalt = function () {
    return crypto.randomBytes(16).toString('base64')
  }
  User.encryptPassword = function (plainText, salt) {
    return crypto
      .createHash('RSA-SHA256')
      .update(plainText)
      .update(salt)
      .digest('hex')
  }

  const setSaltAndPassword = user => {
    if (user.changed('password')) {
      user.salt = User.generateSalt()
      user.password = User.encryptPassword(user.password(), user.salt())
    }
  }

  User.prototype.verifyPassword = function (enteredPassword) {
    return User.encryptPassword(enteredPassword, this.salt()) === this.password()
  }

  User.beforeCreate(setSaltAndPassword)
  User.beforeUpdate(setSaltAndPassword)

  return User;
};
