const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;






// // const env = require('dotenv').config();
// const dbConfig = require("../config/db.config.js");
// const Sequelize = require("sequelize");

// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.Dialect,
//   operatorsAliases: 0,

//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle
//   },
// });

// const db = {};

// db.Sequelize = Sequelize;
// db.connection = sequelize;

// db.User = require('./user.js')(db.connection, db.Sequelize)
// // db.RestaurantBranch = require('./restaurant_branches.js')(db.connection, db.Sequelize);
// db.Customer = require('./customer.js')(db.connection, db.Sequelize);
// db.Restaurant = require('./restaurant.js')(db.connection, db.Sequelize);
// // db.Reservation = require('./reservation.js')(db.connection, db.Sequelize);
// // db.ReservationGuest = require('./reservation_guests.js')(db.connection, db.Sequelize);
// // db.Order = require('./order.js')(db.connection, db.Sequelize);
// // db.Menu = require('./menu.js')(db.connection, db.Sequelize);
// // db.DishType = require('./dish_type.js')(db.connection, db.Sequelize);
// // db.DishClassification = require('./dish_classification.js')(db.connection, db.Sequelize);
// // db.Country = require('./country')(db.connection, db.Sequelize);
// // db.City = require('./city.js')(db.connection, db.Sequelize);
// // db.District = require('./district.js')(db.connection, db.Sequelize);
// // db.RestaurantType = require('./restaurant_type.js')(db.connection, db.Sequelize);
// // db.MembershipType = require('./membership_type')(db.connection, db.Sequelize);
// // db.Feedback = require('./feedback.js')(db.connection, db.Sequelize);
// // db.Table = require('./table.js')(db.connection, db.Sequelize);
// // db.CustomerMembership = require('./customer_membership.js')(db.connection, db.Sequelize);
// // db.Notification = require('./notification.js')(db.connection, db.Sequelize);
// module.exports = db;