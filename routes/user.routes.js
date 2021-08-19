module.exports = app => {
	
    const users = require("../controllers/user.controller.js");
    const {_, auth} = require('../helpers/authHelper.js');
    const temps = require("../controllers/temp.controller");

    var router = require("express").Router();

    router.get("/analysis/:id",temps.findAnalysis);

   router.post("/signup", users.signup);

    router.post("/login", users.login);

    router.post("/changepassword", auth, users.changepassword);

    router.post("/verifypassword", auth, users.verifyPassword);

    app.use('/user', router);
};
