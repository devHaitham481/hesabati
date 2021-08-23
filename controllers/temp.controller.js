const db = require("../models");
const RestaurantBranch = db.RestaurantBranch;
const City = db.City;
const District = db.District;
const Table = db.Table;
const Reservation = db.Reservation;
const Op = db.Sequelize.Op; 
const where = db.Sequelize.where; 
const Sequelize = require('sequelize');
exports.findAnalysis = async (req,res) =>{
    await RestaurantBranch.findAll({
        where:{
            restaurantId:req.params.id,
            // 'id':`$reservations.restaurantBranchId$`,
            // 'id':`$tables.restaurantBranchId$`

        },
        // raw: true,
        // nest: true
        // ,
        attributes:[
            'name',[Sequelize.fn('COUNT', Sequelize.col('reservations.id')), 'num_of_reser'],
            [Sequelize.fn('COUNT', Sequelize.col('tables.id')), 'num_of_tables']
        ],
        include:[
            {
                model:Reservation,
                as: 'reservations',
                attributes:[],
                // where:{
                //     'restaurantBranchId':{$col :'restaurant_branches.id' }
                // }
            },
            {
                model:Table,
                as: 'tables',
                attributes:[],
                where:{
                    'restaurantBranchId':{$col :'restaurant_branches.id' }
                }
            },
            {
                model:City,
                as:'city',
                attributes:[],
                include:[
                    {
                        model:District,
                        as:'districts',
                        attributes:[]
                    }
                ],
            }
        ],group:['restaurant_branches.id']
    }).then((data) => {
        if(!data) { 
            return res.status(404).send({
                message: 'data Not Found',
            });
        }
        return res.status(200).send({
            message: "data returned",
            data: data
        });
    })
    .catch((error) =>  res.status(500).send(error.message));
}


module.exports = exports;