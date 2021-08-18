// const env = require('dotenv').config();
const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.Dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
});

const db = {};

db.Sequelize = Sequelize;
db.connection = sequelize;

db.User = require('./user.js')(db.connection, db.Sequelize)
db.RestaurantBranch = require('./restaurant_branches.js')(db.connection, db.Sequelize);
db.Customer = require('./customer.js')(db.connection, db.Sequelize);
db.Restaurant = require('./restaurant.js')(db.connection, db.Sequelize);
db.Reservation = require('./reservation.js')(db.connection, db.Sequelize);
// db.ReservationGuest = require('./reservation_guests.js')(db.connection, db.Sequelize);
db.Order = require('./order.js')(db.connection, db.Sequelize);
// db.Menu = require('./menu.js')(db.connection, db.Sequelize);
// db.DishType = require('./dish_type.js')(db.connection, db.Sequelize);
// db.DishClassification = require('./dish_classification.js')(db.connection, db.Sequelize);
db.Country = require('./country')(db.connection, db.Sequelize);
db.City = require('./city.js')(db.connection, db.Sequelize);
db.District = require('./district.js')(db.connection, db.Sequelize);
// db.RestaurantType = require('./restaurant_type.js')(db.connection, db.Sequelize);
// db.MembershipType = require('./membership_type')(db.connection, db.Sequelize);
// db.Feedback = require('./feedback.js')(db.connection, db.Sequelize);
db.Table = require('./table.js')(db.connection, db.Sequelize);
// db.CustomerMembership = require('./customer_membership.js')(db.connection, db.Sequelize);
// db.Notification = require('./notification.js')(db.connection, db.Sequelize);


// User.getRestaurants(0)
// User.belongsTo(Restaurant) // this puts a restaurantId in users
// User.hasOne(Restaurant)  // this puts userId in Restaurants


//db.Restaurant.belongsTo(db.User);
db.Reservation.belongsTo(db.Table);
db.Table.hasMany(db.Reservation);
// Restaurant Branch / Reservation
db.Reservation.belongsTo(db.RestaurantBranch);
db.RestaurantBranch.hasMany(db.Reservation);
// Reservation / Customer
db.Reservation.belongsTo(db.Customer);
db.Customer.hasMany(db.Reservation);
db.Customer.hasOne(db.Reservation);
// Table / Restaurant Branches
db.Table.belongsTo(db.RestaurantBranch);
db.RestaurantBranch.hasMany(db.Table);
// Restaurant / Restaurant Branches
db.RestaurantBranch.belongsTo(db.Restaurant);
db.Restaurant.hasMany(db.RestaurantBranch);
// Order / Customer
db.Customer.hasMany(db.Order);
db.Order.belongsTo(db.Customer);
//db.Customer.belongsTo(db.RestaurantBranch);
db.Restaurant.belongsTo(db.User);

//.RestaurantBranch.belongsTo(db.User);

// Restaurant Branch / City
db.RestaurantBranch.belongsTo(db.City);
db.City.hasMany(db.RestaurantBranch);
// Restaurant Branch / Districts
db.RestaurantBranch.belongsTo(db.District);
db.District.hasMany(db.RestaurantBranch);
// Country / Cities
db.City.belongsTo(db.Country);
db.Country.hasMany(db.City);
// City / Districts
db.District.belongsTo(db.City);
db.City.hasMany(db.District);

//db.Restaurant.belongsTo(db.User, { foreignKey: { name: ownerId, allowNull: false}});
//db.User.belongsTo(db.Restaurant, { foreignKey: { name: ownerId, allowNull: false }});

module.exports = db;