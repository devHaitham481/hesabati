const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT_PRODUCTION || 5000;
const path = require("path");



app.set("views", path.join(__dirname, "server/views/pages"));
app.set("views", path.join(__dirname, "./views"))
app.set("view engine", "ejs");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

/**
 * Swagger Doc Declaration
 */
const { swagerServe, swaggerSetup } = require("./swagger");
app.use("/api-docs", swagerServe, swaggerSetup);

/**
 *  Routes Declaration: import route from src/routes.js
 *  and use it as you like here on line 14
 */
const apiRoutes = require("./routes");
app.use("/api/v1", apiRoutes);

require("./routes/home")(app);

// 404 error
app.all("*", (req, res, next) => {
  const err = new Error(404, "Endpoint Not Found");
  next(err);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});



// const express = require('express');
// const cors = require('cors');
// const db = require("./models");
// const { logger, auth } = require('./helpers/authHelper');
// const repl = require('repl');
// const app = express();

// var corsOptions = {
//   origin: '*'
// };

// app.use(cors(corsOptions));

// // parse requests of content-type - application/json
// app.use(express.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

// // Use custom logging middleware
// app.use(logger)

// // Prepare DB
// db.connection.sync();

// // simple route
// app.get('/', (req, res) => {
//   res.json({ message: 'Welcome to Tuxedo APP \n Restaurant Reservations that matter' });
// });

// require("./routes/restaurant.routes")(app);
// require("./routes/user.routes")(app);
// require("./routes/customer.routes")(app);
// // set port, listen for requests
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });