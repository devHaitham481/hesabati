module.exports = app => {
    const router = require('express').Router();

    const Feedback = require('../controllers/feedback.controller');

    //Create
    //Read
    router.get('/feedbacks', Feedback.findAll);
    router.get('/restaurant_branch/:id/feedbacks', Feedback.findFeedbacksofBranch);
    // router.get('/feedbacks/:id', Feedback.findOne);
    // //Update
    // router.update('/feedbacks/:id', Feedback.update);
    // //Delete
    // router.delete('/feedbacks/:id', Feedback.destroy);

    app.use('/', router);

}