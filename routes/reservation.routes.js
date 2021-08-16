module.exports = app => { 
    const reservations = require('../controllers/reservation.controller.js');

    var router = require('express').Router();
    //Create
    router.post('/reservations', reservations.create);
    //Read
    router.get('/reservations', reservations.findAll);
    router.get('/reservation/:id', reservations.findOne);
    //Update
    router.put('/reservations/:id', reservations.update);
    //Delete
    router.delete('/reservations/:id', reservations.destroy);

    app.use('/', router);

}; 