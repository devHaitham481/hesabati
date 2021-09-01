// const env = require('dotenv').config();
const dbConfig = require("../config/db.config");
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

module.exports = db;