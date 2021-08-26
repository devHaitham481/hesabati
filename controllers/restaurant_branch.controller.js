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
//const like = Op.like;
const where = db.Sequelize.where;



const findAll = async (req, res) => {
    let offset = req.query.offset ? parseInt(req.query.offset) : null;
    let limit = req.query.limit ? parseInt(req.query.limit) : null;
    var condition =  restaurantName ? {name: { [Op.iLike]: `%${restaurantName}`}} : null;
    let RestaurantTypeId= req.query.restaurantType ? parseInt(req.query.restaurantType): null ;
    const restaurantName = req.query.name;
    var type = RestaurantTypeId ? {where:{ restaurantTypeId: RestaurantTypeId }} : null ;

    //let limit = parseInt(req.query.limit);
  //  const restaurantName = req.query.name;
    console.log(`${offset} + ${limit} + ${restaurantName}`);
    console.log(req.body);
    console.log(RestaurantTypeId); 
    

    // Invalid value { name: { [Symbol(like)]: '%Maureen%' } }
    await RestaurantBranch.findAll({
        where: 
        condition
        , 
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
                    type,
                 include: [{
                    model: RestaurantType
                }
                ]
            }
                
            ]
    }).then((restaurantBranches) => {
        return res.status(200).send({
            message: "restaurant branches returned", 
            data: restaurantBranches
        })
    })
    .catch((error) => {res.status(500).send(error.message);});

}




module.exports = {
    findAll
}

// exports.create = async(req,res)=>{
//     await Order.create({
//         reservationId:req.body.reservationId
//     }).then(async (order)=>{
//         let data=[];
//         req.body.menu.forEach(async element => {
//             await OrderDetails.create({
//                 orderId:order.id,
//                 menueId:element
//             }).then(()=>{ data.push(element)}).catch((error)=>res.status(500).send({
//                 message:"an error occured",details:error.message
//             }))
//         })

//         res.status(200).send({
//             order:order,
//             details:data
//         });
//     }).catch(error=>{res.status(500).send({message:"an error occured",details:error.message})});   
// }