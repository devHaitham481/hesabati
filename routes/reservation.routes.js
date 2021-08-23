module.exports = app => { 
    const reservations = require('../controllers/reservation.controller.js');

    var router = require('express').Router();
    //Create
    router.post('/reservations', reservations.create);
    //Read
    router.get('/reservations', reservations.findAll);
    router.get('/reservations/cancelled', reservations.findCancelled);
    router.get('/reservations/upcoming', reservations.findUpcoming);
    router.get('/reservations/completed', reservations.findCompleted);
    //Update
    router.put('/reservations/:id', reservations.update);
    router.put('/reservations/:id/cancel', reservations.cancelReservation);
    //router.put('/reservations/:id/checkin', reservations.checkIn);    // when customer arrives at reservation
    //Delete
    router.delete('/reservations/:id', reservations.destroy);
    
    app.use('/', router);

}; 