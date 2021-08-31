//const { Table, Customer, RestaurantBranch } = require('../models');
const db = require('../../models');
const Reservation = db.Reservation;
const Customer = db.Customer; 
const RestaurantBranch = db.RestaurantBranch;
const Table = db.Table;
const Op = db.Sequelize.Op;
const where = db.Sequelize.where;
const  Order  = db.Order


const findAll = async (req, res) => {
    let customerName = req.query.name;
    let keyword = req.query.name ? {firstName: {[Op.iLike]: `${customerName}%`}} : {};
     console.log(req.body);
    await Customer.findAll(
        {
            where: keyword,
            include: [

                {
                    model: Reservation,
                    where: {restaurantBranchId: req.params.id}
                    
                },

            ]
        }
    )
    .then((customers) => {
        return res.status(200).send({
            message: "reservations returned", 
            data: customers
        })
    })
    .catch((error) => {res.status(400).send(error.message);});

}

module.exports = {
    findAll
}