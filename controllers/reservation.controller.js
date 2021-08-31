//const { Table, Customer, RestaurantBranch } = require('../models');
const db = require('../models');
const Reservation = db.Reservation;
const Customer = db.Customer; 
const RestaurantBranch = db.RestaurantBranch;
const Table = db.Table;
const Op = db.Sequelize.Op;
const where = db.Sequelize.where;
const {findCustomerByToken} = require('../helpers/customerHelper'); 
const  Order  = db.Order


const findCompleted = async (req, res) => {
    const customer = await findCustomerByToken(req.user); 
    console.log(req.body);
    await Reservation.findAll(
        {
        where: {status: 'attended',customerId:customer.id},
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
                },
                {
                    model:Order
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
    .catch((error) => {res.status(400).send(error);});

}

const findCancelled = async (req, res) => {
    const customer = await findCustomerByToken(req.user); 
    console.log(req.body);
    await Reservation.findAll(
        {
        where: {status: 'cancelled',customerId:customer.id},
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
                },
                {
                    model:Order
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
    .catch((error) => {res.status(400).send(error);});

}

const findUpcoming = async (req, res) => {
    const customer = await findCustomerByToken(req.user); 
    console.log(customer);
    await Reservation.findAll(
        {
        where: {status: 'active',customerId:customer.id},
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
                },
                {
                    model:Order
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
    .catch((error) => {res.status(400).send(error);});

}


const findAll = async (req, res) => {
    const customer = await findCustomerByToken(req.user);  
    console.log(req.body);
    await Reservation.findAll(
        {
        where: {customerId: customer.id}
        },
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
        .catch((error) => {res.status(400).send(error);});
};

const create = async (req, res) => {
    const customer = await findCustomerByToken(req.user); 
    console.log(req.body);
    // if(!req.body.date, !req.body.time) {
    //     res.status(400).send({
    //         message: 'Please provide all fields'
    //     });
    //     return;
    // }
    let status = "active"
    const newReservation = {
        date: req.body.date,
        time: req.body.time, 
        numberOfGuests: req.body.numberOfGuests, 
        status: status, 
        specialRequest: req.body.specialRequest,
        occassion: req.body.occassion,
        restaurantBranchId: req.body.restaurantBranchId,
        tableId: req.body.tableId,
        customerId: customer.id
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
    const customer = await findCustomerByToken(req.user); 
    console.log(req.body);
    return Reservation.findByPk(req.params.id)
    .then((reservation) => {
        if(!reservation) {
            return res.status(404).send({
                message: 'Reservation Not Found'
            });
        }

        if(reservation.customerId!=customer.id){
            return res.status(400).send("You don't have permission to update other people reservations");
        }

        let status = 'active';
        reservation.update({
            date: req.body.date,
            time: req.body.time, 
            numberOfGuests: req.body.numberOfGuests, 
            status: status, 
            specialRequest: req.body.specialRequest,
            occassion: req.body.occassion,
            restaurantBranchId: req.body.restaurantBranchId,
            tableId: req.body.tableId,
            customerId: customer.id
        })
        .then((reservation) => res.status(200).send({
            message: "Reservation Updated", 
            data: reservation
        }))
        .catch((error) => res.status(500).send(error));
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

const cancelReservation = async (req, res) => {
    const customer = await findCustomerByToken(req.user); 
    console.log(req.body); 
    await Reservation.findByPk(req.params.id)
    .then(async(reservation) => {
        if (!reservation) { 
            return res.status(400).send({
                message: 'Reservation Not Found'
            });
        }

        if(reservation.status=="cancelled"){
            return res.status(400).send("reservation already cancelled");
        }

        if(reservation.customerId!=customer.id){
            return res.status(400).send("You don't have permission to cancel other people reservations");
        }

        await reservation.update({
        status: 'cancelled'
        })

        return res.status(200).send("reservation deleted successfuly")

        
    }).catch((err)=>{
        res.status(500).send("server error \n"+err.message)
    })
    
}

module.exports = {
    findAll,
    findOne,
    create,
    update, 
    destroy,
    cancelReservation,
    findCancelled,
    findUpcoming,
    findCompleted
};