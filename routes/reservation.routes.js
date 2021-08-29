module.exports = app => { 
    const reservations = require('../controllers/reservation.controller.js');
    const {auth} = require('../helpers/authHelper');
    var router = require('express').Router();
    //Create
    router.post('/reservations',auth, reservations.create);
    //Read
    router.get('/reservations', auth,reservations.findAll);
    router.get('/reservations/cancelled',auth, reservations.findCancelled);
    router.get('/reservations/upcoming',auth, reservations.findUpcoming);
    router.get('/reservations/completed',auth, reservations.findCompleted);
    //Update
    router.put('/reservations/cancel/:id',auth, reservations.cancelReservation);
    router.put('/reservations/:id',auth, reservations.update);
    //router.put('/reservations/:id/checkin', reservations.checkIn);    // when customer arrives at reservation
    //Delete
    router.delete('/reservations/:id', reservations.destroy);
    
    app.use('/', router);

}; 