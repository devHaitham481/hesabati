module.exports = app => { 
    
    const router = require('express').Router();

    const Orders = require('../controllers/order.controller');
    
    router.get('/order/:id',Orders.findOne);


    app.use('/', router);

}; 