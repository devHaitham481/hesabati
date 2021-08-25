module.exports = app => { 
    
    const router = require('express').Router();

    const Orders = require('../controllers/order.controller');
    
    router.get('/order/:id',Orders.findOne);

    router.put('/order/:id',Orders.update);

    router.delete('/order/:id',Orders.delete);

    router.get('/order',Orders.findAll);

    router.post('/order',Orders.create)


    app.use('/', router);

}; 