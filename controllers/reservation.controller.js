//const { Table, Customer, RestaurantBranch } = require('../models');
const db = require('../models');
const Reservation = db.Reservation;
const Customer = db.Customer; 
const RestaurantBranch = db.RestaurantBranch;
const Table = db.Table;
const Op = db.Sequelize.Op;
const where = db.Sequelize.where; 


const findAll = async (req, res) => { 
    console.log(req.body);
    await Reservation.findAll(
    //     {
    //     where: restaurantBranchId: req.body.branch
    // },
        {
            include: [
            {
                model: Table
            }, 
        {
            model: Customer
        },
    {
        model: RestaurantBranch
    }]
        }
    )
    .then((reservations) => {
        return res.status(200).send({
            message: "reservations returned", 
            data: reservations
        })
    })
    .catch((error) => {res.status(400).send(error);});

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
                    model: Customer
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
        .catch((error) => {res.status(400).send(error);});
};

const create = async (req, res) => {
   // console.log(req.body);
    if(!req.body.date, !req.body.time) {
        res.status(400).send({
            message: 'Please provide all fields'
        });
        return;
    }
    const newReservation = {
        date: req.body.date,
        time: req.body.time, 
        numberOfGuests: req.body.numberOfGuests, 
        status: req.body.status, 
        notes: req.body.notes,
        restaurantBranchId: req.body.restaurantBranchId,
        tableId: req.body.tableId,
        // customerId: req.body.customerId
    };
    // console.log(newReservation);
      Reservation.create( newReservation )
    .then((reservation) => res.status(201).send({
        message: "Reservation Created", 
        data: reservation
    }))
    .catch((error) => res.status(500).send(error));
};

const update = async (req, res) => {
    console.log(req.body);
    return Reservation.findByPk(req.params.id)
    .then((reservation) => {
        if(!reservation) {
            return res.status(404).send({
                message: 'Reservation Not Found'
            });
        }
        reservation.update({
            date: req.body.date,
            time: req.body.time, 
            numberOfGuests: req.body.numberOfGuests, 
            status: req.body.status, 
            notes: req.body.notes,
            restaurantBranchId: req.body.restaurantBranchId,
            tableId: req.body.tableId,
          //  customerId: 
        })
        .then((reservation) => res.status(200).send({
            message: "Reservation Updated", 
            data: reservation
        })
        .catch((error) => res.status(500).send(error)));
    })
};

const destroy = async (req, res) => {
    console.log(req.body);
    Reservation.findByPk(req.params.id)
    .then((reservation) => {
        if(!reservation) {
            return res.status(400).send({
                message: 'Reservation Not Found'
            });
        }
        reservation.destroy()
        .then(() => res.status(200).send({
            message: "Reservation Deleted"
        }))
        .catch((error) => res.status(500).send(error));
    })
};

module.exports = {
    findAll,
    findOne,
    create,
    update, 
    destroy
};