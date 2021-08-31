const db = require('../../models');
const Reservation = db.Reservation;
const Customer = db.Customer;
const Table = db.Table;
const Op = db.Sequelize.Op;
const where = db.Sequelize.where;
const  Order  = db.Order


const getRestaurantBranchTables = async(req,res) => {
    await Table.findAll({
        where:{
            restaurantBranchId:req.params.id
        }
    })
    .then((tables)=>{
        return res.status(200).send({
            message:'tables returned',
            tables
        })
    })
}


module.exports = {
    getRestaurantBranchTables
}