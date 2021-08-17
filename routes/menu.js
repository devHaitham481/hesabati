module.exports = (app) => {


    const menues = require("../controllers/menu.controller");
    const router = require("express").Router();

    router.get("/:id",menues.findOne);

    app.use("/restaurant_branches/menu",router);
}