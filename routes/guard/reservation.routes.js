module.exports = app => { 
    const reservations = require('../../controllers/guard/reservation.controller');
    const {auth} = require('../../helpers/authHelper');
    var router = require('express').Router();
    //Create
    // router.post('/reservations',reservations.create);
    //Read
    router.get('/restaurant_branches/:id/reservations', reservations.findAll);
    router.get('/reservations/:id', reservations.findOne);
    // router.get('/reservations/cancelled',reservations.findCancelled);
    // router.get('/reservations/upcoming',reservations.findUpcoming);
    // router.get('/reservations/completed', reservations.findCompleted);
    //Update
    // router.put('/reservations/cancel/:id',reservations.cancelReservation);
    // router.put('/reservations/:id', reservations.update);
    // //router.put('/reservations/:id/checkin', reservations.checkIn);    // when customer arrives at reservation
    // //Delete
    // router.delete('/reservations/:id', reservations.destroy);
    
    app.use('/guard', router);

}; 