const restaurant = require('../models/restaurant.js');

module.exports = app => {
    const restaurant_types = require('../controllers/restaurant_type.controller.js');


    var router = require("express").Router();

    //Create
    
    //Read
    router.get('/restaurant_types', restaurant_types.findAll);
    router.get('/restaurant_types/:id', restaurant_types.findAllRestaurantsByType);
    //Update

    //Delete

    app.use('/', router);
}