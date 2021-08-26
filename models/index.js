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
//   const database_url = "postgresql+ssh://forge@172.104.137.65/forge@127.0.0.1/forge?name=dev-env&usePrivateKey=true"
// const sequelize = new Sequelize(

//   database_url,
//   {
//     ssl = true,
//     dialectOptions = {
//       ssl: true,
//     },
//   },
// );

const db = {};

db.Sequelize = Sequelize;
db.connection = sequelize;

db.User = require('./user.js')(db.connection, db.Sequelize)
db.RestaurantBranch = require('./restaurant_branches.js')(db.connection, db.Sequelize);
db.Customer = require('./customer.js')(db.connection, db.Sequelize);
db.Restaurant = require('./restaurant.js')(db.connection, db.Sequelize);
db.Reservation = require('./reservation.js')(db.connection, db.Sequelize);
db.ReservationGuest = require('./reservation_guests.js')(db.connection, db.Sequelize);
db.Order = require('./order.js')(db.connection, db.Sequelize);
db.Menu = require('./menu.js')(db.connection, db.Sequelize);
db.DishType = require('./dish_type.js')(db.connection, db.Sequelize);
db.DishClassification = require('./dish_classification.js')(db.connection, db.Sequelize);
db.Country = require('./country')(db.connection, db.Sequelize);
db.City = require('./city.js')(db.connection, db.Sequelize);
db.District = require('./district.js')(db.connection, db.Sequelize);
db.RestaurantType = require('./restaurant_type.js')(db.connection, db.Sequelize);
db.MembershipType = require('./membership_type')(db.connection, db.Sequelize);
db.Feedback = require('./feedback.js')(db.connection, db.Sequelize);
db.Table = require('./table.js')(db.connection, db.Sequelize);
db.CustomerMembership = require('./customer_membership.js')(db.connection, db.Sequelize);
// db.Notification = require('./notification.js')(db.connection, db.Sequelize);
db.Category = require('./category.js')(db.connection, db.Sequelize);
db.Permission = require('./permission.js')(db.connection, db.Sequelize);
// User.getRestaurants(0)
// User.belongsTo(Restaurant) // this puts a restaurantId in users
// User.hasOne(Restaurant)  // this puts userId in Restaurants
db.PermissionUser = require('./permission_user.js')(db.connection, db.Sequelize);
db.Role = require('./role.js')(db.connection, db.Sequelize);
db.PermissionRole = require('./permission_role.js')(db.connection, db.Sequelize);
db.RestaurantPhoto = require('./restaurant_photo.js')(db.connection, db.Sequelize);
db.TablePhoto = require('./table_photo.js')(db.connection, db.Sequelize); 
db.RoleUser = require('./role_user.js')(db.connection, db.Sequelize);
db.OrderDetails = require("./order_details")(db.connection,db.Sequelize);
db.RestaurantLocale = require("./restaurant_locale.js")(db.connection, db.Sequelize);
db.MenuLocale = require("./menu_locale.js")(db.connection, db.Sequelize);
db.DishClassificationLocale = require("./dish_classification_locale.js")(db.connection, db.Sequelize);
db.DishTypeLocale = require("./dish_type_locale.js")(db.connection, db.Sequelize);
db.RestaurantBranchLocale = require("./restaurant_branch_locale.js")(db.connection, db.Sequelize);



//Sequelize Associations
db.Restaurant.belongsTo(db.RestaurantType);
db.RestaurantPhoto.belongsTo(db.Restaurant);
db.PermissionUser.belongsTo(db.Permission);
db.PermissionUser.belongsTo(db.User);

db.PermissionRole.belongsTo(db.Permission);
db.PermissionRole.belongsTo(db.Role);

db.RoleUser.belongsTo(db.User);
db.RoleUser.belongsTo(db.Role);

//memberships
db.Restaurant.hasMany(db.MembershipType);
db.MembershipType.belongsTo(db.Restaurant);

db.CustomerMembership.belongsTo(db.Customer);
db.Customer.hasOne(db.CustomerMembership);

db.MembershipType.hasMany(db.CustomerMembership);
//db.CustomerMembership.belongsTo(db.MembershipType);




// Reservation / ReservationGuest
db.Reservation.hasMany(db.ReservationGuest);
db.ReservationGuest.belongsTo(db.Reservation);

//feedbacks
db.Customer.hasMany(db.Feedback);
db.Feedback.belongsTo(db.Customer);

db.RestaurantBranch.hasMany(db.Feedback);
db.Feedback.belongsTo(db.RestaurantBranch);

db.Restaurant.belongsTo(db.Category);
//db.Restaurant.belongsTo(db.User);
db.Reservation.belongsTo(db.Table);
db.Table.hasMany(db.Reservation);
db.TablePhoto.belongsTo(db.Table);
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
// db.Customer.hasMany(db.Order);
//db.Order.belongsTo(db.Customer);

// Order / Reservation
db.Reservation.hasOne(db.Order);
db.Order.belongsTo(db.Reservation);



// // Order / Items many to many relationship
db.Order.belongsToMany(db.Menu,{through: {
  model:"order_details",
  unique:false
},    constraints: false },);
db.Menu.belongsToMany(db.Order,{through: {
  model:"order_details",
  unique:false
},    constraints: false },);

// Order / Menu [dish item id]
// db.Menu.hasMany(db.Order);
//db.Order.belongsTo(db.Menu);

// Order / RestaurantBranch
// db.RestaurantBranch.hasMany(db.Order);
//db.Order.belongsTo(db.RestaurantBranch);

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
// sequelize.sync({ force: true });
// console.log("All models were synchronized successfully.");

db.Menu.belongsTo(db.DishType);
db.DishType.hasMany(db.Menu);
db.Menu.belongsTo(db.DishClassification);
db.DishClassification.hasMany(db.Menu);

// db.DishClassification.hasMany(db.Menu);
// // db.Menu.belongsTo(db.DishClassification);
// // db.Menu.belongsTo(db.DishType);
// db.DishType.hasMany(db.Menu);
db.Menu.belongsTo(db.RestaurantBranch);
db.RestaurantBranch.hasMany(db.Menu);

sequelize.sync({ force: true });
console.log("All models were synchronized successfully.");


module.exports = db;