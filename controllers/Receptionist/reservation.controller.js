const db = require('../../models');
const Reservation = db.Reservation;
const Customer = db.Customer;
const Table = db.Table;
const Op = db.Sequelize.Op;
const where = db.Sequelize.where;
const  Order  = db.Order

//find reservation where the custmer is attended   
const findOneInBusyTable = async(req,res) => {
    await Reservation.findOne({
        where:{
            restaurantBranchId:req.params.id,
            tableId:req.params.tableId,
            status:'attended'
        },
        include:[
            {
                model:Customer
            },
            {
                model:Table
            }
        ]
    })
    .then((reservation) => {
        return res.status(200).send({
            message: "reservation returned", 
            data: reservation
        })
    })
    .catch((error) => {res.status(400).send(error);});
}


const findAll = async(req,res) => {
    await Reservation.findAll(
        {
        where: {restaurantBranchId: req.params.id}
        ,
            include: [
                {
                    model: Table
                }, 
                {
                    model: Customer
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


const editReservation = async(req,res) => {
    await Reservation.findByPk(req.params.id)
    .then(async(reservation) => {
        if (!reservation) { 
            return res.status(400).send({
                message: 'Reservation Not Found'
            });
        }

        await reservation.update({
        date: req.body.date,
        time:req.body.time,
        numberOfGusets:req.body.numberOfGusets,
        tableId:req.body.tableId
        })

        return res.status(200).send("reservation extended successfuly")

        
    }).catch((err)=>{
        res.status(500).send("server error \n"+err.message)
    })
}

const cancelReservation = async(req,res) => {
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

        await reservation.update({
        status: 'cancelled'
        })

        return res.status(200).send("reservation cancelled successfuly")

        
    }).catch((err)=>{
        res.status(500).send("server error \n"+err.message)
    })
}

module.exports = {
    findAll,
    findOneInBusyTable,
    editReservation,
    cancelReservation
}