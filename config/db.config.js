module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Dafa.sa@123",
    DB: "test_db",
    PORT: '5432',
    Dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
