const crypto = require('crypto')
module.exports = (sequelize, Sequelize) => {
  const Seller = sequelize.define("Sellers", {
     id: {
     type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
    userName: { 
						type: Sequelize.STRING, 
		}, 
    lastName: { 
						type: Sequelize.STRING, 
						notEmpty: true, 
						notNull: true
		},
    email: {
      type: Sequelize.STRING,
      set: function (val) {
        this.setDataValue('email', val.toLowerCase());
      },
      notEmpty: true,
      notNull: false,
      unique: true
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

  // Seller.generateSalt = function () {
  //   return crypto.randomBytes(16).toString('base64')
  // }
  // Seller.encryptPassword = function (plainText, salt) {
  //   return crypto
  //     .createHash('RSA-SHA256')
  //     .update(plainText)
  //     .update(salt)
  //     .digest('hex')
  // }

  // const setSaltAndPassword = Seller => {
  //   if (Seller.changed('password')) {
  //     Seller.salt = Seller.generateSalt()
  //     Seller.password = Seller.encryptPassword(Seller.password(), Seller.salt())
  //   }
  // }

  // Seller.prototype.verifyPassword = function (enteredPassword) {
  //   return Seller.encryptPassword(enteredPassword, this.salt()) === this.password()
  // }

  // Seller.beforeCreate(setSaltAndPassword)
  // Seller.beforeUpdate(setSaltAndPassword)

  return Seller;
};
