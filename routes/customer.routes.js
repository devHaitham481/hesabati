module.exports = app => { 
    const customers = require("../controllers/customer.controller.js")
    const {_, auth} = require("../helpers/authHelper.js");
    //middlewares

    var router = require("express").Router();
    // Create
    router.post("/signup", customers.signup);
    router.post("/login", customers.login);
    //Read
    router.post("/changepassword", auth, customers.changePassword);
    router.post("/verifypassword", auth, customers.verifyPassword);
    //Update
    router.put("/profile",auth, customers.updateProfile);
    router.get("/profile",auth, customers.findProfile);
    //Delete

    app.use('/customer', router);


};