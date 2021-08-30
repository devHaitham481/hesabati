module.exports = app =>{
    const notifications = require('../controllers/notification.controller');
    const {auth} = require("../helpers/authHelper.js");
    var router = require('express').Router();

    router.get('/notifications',auth,notifications.getCustomerNotifications);
    router.put('/notifications',auth,notifications.readNotification);
    router.post('/invite',auth,notifications.inviteGuest);

    app.use('/', router);
}