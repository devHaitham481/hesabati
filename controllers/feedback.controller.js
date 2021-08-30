const db = require('../models');
const Op = db.Sequelize;
const where = db.Sequelize.where;
const Customer = db.Customer;
const RestaurantBranch = db.RestaurantBranch;
const Feedback = db.Feedback;
const Restaurant = db.Restaurant;

const findAll = async (req, res) => {
    let offset = req.query.offset ? parseInt(req.query.offset) : null;
    let limit = req.query.limit ? parseInt(req.query.limit) : null;
    console.log(req.body); 
    Feedback.findAll({

        where: {}, 
        order: [
            ['id', 'ASC']
        ], 
        include: 
        [ 
            {
                model: Customer,
            },
            {
                model: RestaurantBranch
            }
        ]
        
    }).then((feedbacks) => {
        return res.status(200).send({
            message: "feedbacks returned", 
            data: feedbacks
        })
    })
    .catch((error) => {res.status(500).send(error.message)}); 
}

const create = async (req, res) => {
    restaurantBranchId = req.params.id;
    console.log(req.body);
    console.log(req.params.id);
    const newFeedback = {
        comment: req.body.comment, 
        rating: req.body.rating, 
        restaurantBranchId: req.params.id
    };
    await Feedback.create(newFeedback) 
    .then((feedback) => res.status(204).send({
        message: "Feedback Added", 
        data: feedback
    }))
    .catch((error) => res.status(500).send(error))
};

const findFeedbacksofBranch = async (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    await Feedback.findAll({
        where: {
            restaurantBranchId: req.params.id
        },
        order: [
            ['id', 'ASC']
        ],
        include: 
        [
            {
                model: RestaurantBranch
            }, 
            {
                model: Customer
            }
        ]
    }).then((feedbacks) => {
        return res.status(200).send({
            message: "feedbacks for restaurant branch returened", 
            data: feedbacks
        })
    }).catch((error) => {res.status(500).send(error.message)});
};

// const createFeedbackForRestaurant = async (req, res) => {
//     console.log(req.body);
//     console.log(req.params.id);
//     const newFeedback = {
//      comment: req.body.comment, 
//      rating: req.body.rating, 
//      restaurantBranchId: req.params.id
//     };
//     await Feedback.create
// }

module.exports = {
    findAll, 
    create,
    findFeedbacksofBranch
}