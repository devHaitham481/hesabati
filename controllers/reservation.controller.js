const db = require('../models');
const Reservation = db.Reservation;
const Op = db.Sequelize.Op;
const where = db.Sequelize.where; 


// const findAll = async (req, res) => { 
//     console.log(req.body);
//     await Reservation.findAll()

// }