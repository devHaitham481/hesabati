module.exports = app => { 
    const tables = require("../../controllers/Receptionist/table.controller");
    const {auth} = require("../../helpers/authHelper.js");
    //middlewares

    var router = require("express").Router();
    // Create

    //Read
    router.get('/restaurant_branches/:id/tables',tables.getRestaurantBranchTables);
    //Update
    //Delete

    app.use('/receptionist', router);


};