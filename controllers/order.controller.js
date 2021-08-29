const { Op } = require("sequelize");
const db = require('../models');
const Menu = db.Menu;
const Order = db.Order;
const OrderDetails = db.OrderDetails;
const sequelize = db.connection


const { deleteOrderItems } = require('../helpers/orderHelper');

exports.findOne = async(req,res)=>{//find order by order id
    await Order.findOne(
        {
            attributes:['id'],
            where:{
                "id":req.params.id
                
                
            }
        }

    ).then(async(order)=>{
        if(!order){
            return res.status(400).send("no such order")
        }

        const [data,meta] = await sequelize.query(
            `select "order_details"."id", "menues"."id" as "itemId", "menues"."dishName","menues"."dishDescription","menues"."dishPrice" from "menues","order_details"
            where "menues"."id" = "order_details"."menueId"
            and "order_details"."orderId" = ${order.id}
            `
        )

        res.status(200).send({
            message:"order returened successfully",
            id:order.id,
            data:data
        });
    }).catch((error)=>{
        res.status(500).send({
            message:error.message
        });
    })
}

exports.findAll = async (req,res)=>{//find orders by restaurant branch id
    await sequelize.query(`
        select "orders"."id" as order_id, "dishName","dishPrice" from "orders","reservations","menues","order_details"
        where "orders"."reservationId" = "reservations"."id"
        and "orders"."id"="order_details"."orderId"
        and "menues"."id"="order_details"."menueId"
        and "reservations"."restaurantBranchId" = ${req.body.restaurantBranchId}
    `
    ).then(([data,meta])=>{
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

exports.create = async(req,res)=>{//create order by reservation id
    await Order.create({
        reservationId:req.body.reservationId
    }).then(async (order)=>{
        req.body.menu.forEach(async element => {
            await OrderDetails.create({
                orderId:order.id,
                menueId:element
            }); 
        })
        res.status(200).send({
            order:order,
            menuItems:req.body.menu
        });
    }).catch(error=>{res.status(500).send({message:"an error occured",details:error.message})});   
}


exports.update = async(req,res)=>{//update order by oeder id
    await Order.findOne({
        where:{
            id:req.params.id
        }
    }).then(async (order)=>{
        if(!order){ return res.status(400).send("there's no such an order") }
        await deleteOrderItems(order.id);
        req.body.menu.forEach(async element => {
            await OrderDetails.create({
                orderId:order.id,
                menueId:element
            }); 
        })
        res.status(200).send({
            message:"order updated successfully",
            order:order,
            menuItems:req.body.menu
        });
    }).catch(error=>{res.status(500).send({message:"an error occured",details:error.message})});  
}

exports.delete = async(req,res)=>{//delete order by order id
    await Order.findOne({
        where:{
            id:req.params.id
        }
    }).then(async(order)=>{
        if(!order){ return res.status(400).send("there's no such an order") }
        await deleteOrderItems(order.id);
        await Order.destroy({
            where:{
                id:order.id
            }
        })

        res.status(200).send({
            message:"order deleted successfully",
            order:order
        });
    })
}






module.exports = exports;