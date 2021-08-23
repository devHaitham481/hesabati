module.exports = app => {
    const restaurantBranches = require('../controllers/restaurant_branches.js');

    var router = require("express").Router();

    //Create
    router.get('/restaurant_branches', restaurantBranches.findAll);
    router.get('/restaurant_branches/:id', restaurantBranches.findOne);
    //Read

    //Update

    //Delete
}