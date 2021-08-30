module.exports = app =>{
    const table = require('../controllers/table.controller');

    var router = require('express').Router();

    router.get('/tables',table.findAll);

    app.use('/', router);
}