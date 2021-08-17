module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "123",
    DB: "Tuxedo_db",
    PORT: '5432',
    Dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
// module.exports = {
//     HOST: "172.104.137.65",
//     USER: "forge",
//     PASSWORD: "9cWOHth0E0ToPaBSOs9U",
//     DB: "tuxedo_db",
//     PORT: '5432',
//     Dialect: "postgres",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
//   };