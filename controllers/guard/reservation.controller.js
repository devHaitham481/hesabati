const db = require('../../models');
const Reservation = db.Reservation;
const Customer = db.Customer; 
const RestaurantBranch = db.RestaurantBranch;
const Table = db.Table;
const Op = db.Sequelize.Op;
const where = db.Sequelize.where;
const  Order  = db.Order

const findAll = async (req, res) => {
    // const customer = await findCustomerByToken(req.user); 
    const customerName = req.query.name;
    let keyword = customerName ? {firstName: { [Op.iLike]: `${customerName}%`}} : {};
    restaurantBranchId = req.params.id;

    console.log(req.body);
    await Reservation.findAll(
        {
            where: {
                restaurantBranchId: restaurantBranchId
            },
         order: [
            ['id', 'DESC']
        ],
         include: [
             {
                model: Table
             }, 
             {
                model: Customer,
                as: 'customer',
                where: keyword,
              },
              {
                model: RestaurantBranch,

              }
            ]
        }
    )
    .then((reservations) => {
        return res.status(200).send({
            message: "reservations returned", 
            data: reservations
        })
    })
    .catch((error) => {res.status(400).send(error.message);});

};

const findOne = async (req, res) => {
    console.log(req.body);
    await Reservation.findByPk(req.params.id, 
        {   
            include: [
                {
                    model: Table
                },
                {
                    model: Customer,
                    as: 'customer'
                },
                {
                    model: RestaurantBranch
                }
            ]
        })
        .then((reservation) => {
            if(!reservation) {
                return res.status(404).send({
                    message: 'Reservation Not Found'
                });
            }
            return res.status(200).send({
                message: "reservation returned",
                data: reservation
            });
        })
        .catch((error) => {res.status(500).send(error.message);});
};


module.exports = {
    findAll,
    findOne,
};