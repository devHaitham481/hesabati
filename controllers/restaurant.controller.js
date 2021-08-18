const db = require("../models");
const Restaurant = db.Restaurant; 
const Op = db.Sequelize.Op; 
const where = db.Sequelize.where; 
const User = db.User;

const findAll = async (req, res) => { 
    console.log(req.body);
   await Restaurant.findAll(
        {
        include: [{
            model: User
        },
        
    ], 
    order: [
        ['createdAt', 'DESC'],
        [{ model: User}, 'createdAt', 'DESC'],
    ] }
    )
    .then((restaurants) => {
        return res.status(200).send({
     message: "restaurants returned",
     data: restaurants
    })}
    )
    .catch((error) => { res.status(400).send(error);});
    
};

const findOne = async (req, res) => { 
    console.log(req.body);
    return Restaurant 
    .findByPk(req.params.id
        , 
        {
        include: [{
            model: User,
            //as: 'user'
         }], }
        )
    .then((restaurant) => {
        if(!restaurant) { 
            return res.status(404).send({
                message: 'Restaurant Not Found',
            });
        }
        return res.status(200).send({
            message: "restaurant returned",
            data: restaurant
        });
    })
    .catch((error) => res.status(400).send(error));
};

const create = async (req, res) => { 
    console.log(req.body);
    if(!req.body.restaurantName, !req.body.restaurantLocation) {
        res.status(400).send({
            message: 'Please provide all fields'
        });
        return;
    }
    const newRestaurant = { 
        name: req.body.restaurantName,
        location: req.body.restaurantLocation
    };  
    Restaurant.create(newRestaurant)
    .then((restaurant) => res.status(201).send({
        message: "Restaurant Created", 
        data: restaurant
    }))
    .catch((error) => res.status(400).send(error));
};

const update = async (req, res) => { 
    console.log(req.body);
    return Restaurant
    .findByPk(req.params.id
        , {
        include: [{
            model: User,
            //as: 'user'
        }],
    }
    )
    .then(restaurant => {
        if(!restaurant) {
            return res.status(404).send({
                message: 'Restaurant Not Found'
            });
        }
     restaurant.update({
            name: req.body.restaurantName,
            location: req.body.restaurantLocation
        })
        .then(() => res.status(200).send({
            message: "Restaurant Updated", 
            data: restaurant
        })
        .catch((error) => res.status(400).send(error)));
    })
   // .catch((error) => res.status(400).send(error));
};

const destroy = async (req, res) => {
    console.log(req.body);
    return Restaurant
    .findByPk(req.params.id)
    .then((restaurant) => {
        if(!restaurant) {
            return res.status(400).send({
                message: 'Restaurant Not Found'
            });
        }
        restaurant.destroy()                   // Message doesn't get printed on 204 status 
        .then(() => res.status(204).send({ 
            message: "Restaurant Deleted"
        }))
        .catch((error) => res.status(400).send(error));
    })
    //.catch((error) => res.status(400).send(error));
};

module.exports = {
    findAll,
    findOne,
    create,
    destroy,
    update
};
