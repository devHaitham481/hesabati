module.exports = app => {
  const index = require("../controllers/index");


  var router = require("express").Router();
  // //Create
  // router.post("/restaurants", restaurants.create);
  // //Read
  router.get("/index", function (req, res, next) {
    res.render("index", { title: "Express from server folder" });
  });
  // router.get("/restaurants/:id", restaurants.findOne);
  // //Update
  // router.put("/restaurants/:id", restaurants.update);
  // //Delete
  // router.delete("/restaurants/:id", restaurants.destroy);
  // //router.delete("/restaurants", restaurants.deleteAll);

  app.use('/', router)


};