module.exports = app => { 
    const customers = require("../controllers/customer.controller.js")
    const {_, auth} = require("../helpers/authHelper.js");
    //middlewares

    var router = require("express").Router();

    router.post("/signup", customers.signup);
    router.post("/login", customers.login);

    router.post("/changepassword", auth, customers.changePassword);
    router.post("/verifypassword", auth, customers.verifyPassword);

    router.put("/profile/:id", customers.updateProfile);
    router.get("/profile/:id", customers.findProfile);

    app.use('/customer', router);

    // app.post('/register', async (req, res) => {
    //     const user = await User.create(req.body);
    //     res.json(user);
    //   });
};