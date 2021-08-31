// const { RestaurantPhoto } = require('../models');
const db = require('../models');
const restaurant_branches = require('../models/restaurant_branches');
const RestaurantBranch = db.RestaurantBranch;
const Restaurant = db.Restaurant;
const City = db.City;
const District = db.District;
const User = db.User;
const Op = db.Sequelize.Op;
const RestaurantType = db.RestaurantType;
const where = db.Sequelize.where;
const {findNearest} = require('../helpers/restaurantBranchHelper');



const findAll = async (req, res) => {
    let offset = req.query.offset ? parseInt(req.query.offset) : null;
    let limit = req.query.limit ? parseInt(req.query.limit) : null;
    let RestaurantTypeId= req.query.restaurantType ? parseInt(req.query.restaurantType): null ;
   // const where = {restaurantTypeId: RestaurantTypeId};
    const restaurantName = req.query.name;
    var where = RestaurantTypeId ? { restaurantTypeId: RestaurantTypeId } : {} ;
    var keyword =  restaurantName ? {name: { [Op.iLike]: `${restaurantName}%`}} : {} ;
    //var type = RestaurantTypeId ? where:{ restaurantTypeId: RestaurantTypeId } : null ;
    console.log(`${offset} + ${limit} + ${restaurantName}`);
    console.log(req.body);
    console.log(RestaurantTypeId);
    console.log({where});
    await RestaurantBranch.findAll({
        where: 
            keyword,
            offset, 
            limit,
        order: [
            ['id', 'ASC']
        ],
        include: 
        [
            {
                model: City,
              //  as: 'cities'
            },
            {
                model: District,
                //as: 'districts'
            },
            {
                model: Restaurant, 
                as: 'restaurant',
                where,
                include: [{
                    model: RestaurantType,
                    as: 'restaurant_type'
                }
                ]
            }  
            ]
    }).then((restaurantBranches) => {
        let sortedBranches = restaurantBranches
        if(req.body.latitude&&req.body.longitude){
        sortedBranches = findNearest(restaurantBranches,req.body.latitude,req.body.longitude);
        }
        return res.status(200).send({
            message: "restaurant branches returned", 
            data: sortedBranches
        })
    })
    .catch((error) => {res.status(500).send(error.message);});
}
const findOne = async (req, res) => {
    await RestaurantBranch.findOne({
        // where: 
        order: [
            ['id', 'ASC']
        ],
        include: 
        [
            {
                model: City,
              //  as: 'cities'
            },
            {
                model: District,
                //as: 'districts'
            },
            {
                model: Restaurant, 
                as: 'restaurant', 
            }  
            ]
    }).then((restaurantBranch) => {
        return res.status(200).send({
            message: "restaurant branches returned", 
            data: restaurantBranch
        })
    })
    .catch((error) => {res.status(500).send(error.message);});
}
// const pinOnMap = async (req,res) =>{
//     let offset = req.query.offset ? parseInt(req.query.offset) : null;
//     let limit = req.query.limit ? parseInt(req.query.limit) : null;
    
//     await RestaurantBranch.findAll({
//     where: {
//     },
//     offset, limit, 
//     order: [
//     ['id', 'ASC']
//     ],
//     attributes:['id','name','longitude','latitude']
//     }).then((restaurantBranches) => {
//     return res.status(200).send({
//     message: "restaurant branches returned", 
//     data: restaurantBranches
//     })
//     })
//     .catch((error) => {res.status(500).send(error.message);});
//     }

module.exports = {
    findAll,
    findOne
}
