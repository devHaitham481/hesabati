const { Op } = require("sequelize");
const db = require('../models');
const Menu = db.Menu;
const Order = db.Order;
const OrderDetails = db.OrderDetails;
const sequelize = db.connection

exports.findOne = async(req,res)=>{
    await Order.findOne(
        {
            attributes:['id'],
            where:{
                "id":req.params.id
                
                
            },
            include:[
                {
                    model:Menu,
                    attributes:['id','dishName','dishDescription','dishPrice'],
                    through: { attributes: [] }
                }
            ]
        }

    ).then((data)=>{
        res.status(200).send({
            message:"orders returened successfully",
            data:data
        });
    }).catch((error)=>{
        res.status(500).send({
            message:error.message
        });
    })
}

exports.create = async(req,res)=>{
    
}

exports.delete = async(req,res)=>{
    
}

exports.update = async(req,res)=>{
    
}




module.exports = exports;