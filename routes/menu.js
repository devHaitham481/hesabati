module.exports = (app) => {


    const menues = require("../controllers/menu.controller");
    const router = require("express").Router();

    router.get("/:id",menues.findOne);

    app.use("/menu",router);
}