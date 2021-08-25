module.exports = app => {
    const restaurantBranches = require('../controllers/restaurant_branch.controller');

    var router = require("express").Router();

    //Create
    // router.post('/restaurant_branches', restaurantBranches.create);
    //Read
    router.get('/restaurant_branches', restaurantBranches.findAll);
    // router.get('/restaurant_branches/:id', restaurantBranches.findOne);
    //Update
    // router.put('/restaurant_branches/:id', restaurantBranches.update);
    // //Delete
    // router.delete('/restaurant_branches/:id', restaurantBranches.destroy);
   // router.get('/restaurant_branches/search', restaurantBranches.findAllByKeyword)
    app.use('/', router);
};
