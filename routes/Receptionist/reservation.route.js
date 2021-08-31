module.exports = app => { 
    const reservations = require("../../controllers/Receptionist/reservation.controller");
    const {auth} = require("../../helpers/authHelper.js");
    //middlewares

    var router = require("express").Router();
    // Create

    //Read
    router.get('/restaurant_branches/:id/reservations',reservations.findAll);
    router.get('/restaurant_branches/:id/reservations/:tableId',reservations.findOneInBusyTable);
    //Update
    router.put('/reservations/:id/cancel',reservations.cancelReservation);
    router.put('/reservations/:id',reservations.editReservation);
    //Delete

    app.use('/receptionist', router);


};