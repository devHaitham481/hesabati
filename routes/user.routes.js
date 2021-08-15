module.exports = app => {
	
    const users = require("../controllers/user.controller.js");
    const {_, auth} = require('../helpers/authHelper.js');

    var router = require("express").Router();

   router.post("/signup", users.signup);

    router.post("/login", users.login);

    router.post("/changepassword", auth, users.changepassword);

    router.post("/verifypassword", auth, users.verifyPassword);

    app.use('/user', router);
};
