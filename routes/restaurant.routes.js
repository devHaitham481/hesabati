module.exports = app => { 
    const restaurants = require("../controllers/restaurant.controller");
    
    

    var router = require("express").Router();

    //custom routes
    router.get("/type",restaurants.findByType);


    //Create
    router.post("/", restaurants.create);
    //Read
    router.get("/", restaurants.findAll);
    router.get("/:id", restaurants.findOne);
    //Update
    router.put("/:id", restaurants.update);
    //Delete
    router.delete("/:id", restaurants.destroy);
    //router.delete("/restaurants", restaurants.deleteAll);


    

    app.use('/restaurants', router);
    
    
};

