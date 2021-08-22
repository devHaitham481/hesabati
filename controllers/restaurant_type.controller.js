const db = require('../models');
const Restaurant = db.Restaurant; 
const RestaurantType = db.RestaurantType;
const Op = db.Sequelize.Op;
const where = db.Sequelize.where; 


const findAll = async (req, res) => {
    console.log(req.body); 
    await RestaurantType.findAll()
    .then((restaurantTypes) => {
        res.status(200).send({
            message: 'Restaurant Types Returned', 
            data: restaurantTypes
        });
    }).catch((error) => res.status(500).send(error));

};


// /restaurant_types/:id
const findAllRestaurantsByType = async (req, res) => {
    console.log(req.body); 
    await RestaurantType.findByPk(req.params.id, {
        include: {
            model: Restaurant
        }
    })
    .then((restaurantTypes) => {
        if (!restaurantTypes) {
            res.status(404).send({
                message: 'Restaurant Type Not Found'
            });
        }
        res.status(200).send({
            message: 'Restaurants by Type returned', 
            data: restaurantTypes
        });
    }).catch((error) => res.status(500).send(error));
}



module.exports = {
    findAll, 
    findAllRestaurantsByType
}