module.exports = app => { 
    const restaurants = require("../controllers/restaurant.controller");
    

    var router = require("express").Router();
    //Create
    router.post("/restaurants", restaurants.create);
    //Read
    router.get("/restaurants", restaurants.findAll);
    router.get("/restaurants/:id", restaurants.findOne);
    //Update
    router.put("/restaurants/:id", restaurants.update);
    //Delete
    router.delete("/restaurants/:id", restaurants.destroy);
    //router.delete("/restaurants", restaurants.deleteAll);

    app.use('/', router);
    
    
};

