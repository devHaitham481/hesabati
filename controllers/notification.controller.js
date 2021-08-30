const db = require('../models');
const Notification = db.Notification;
const { findCustomerByToken } = require('../helpers/customerHelper');
/*
    get customer notifications by token
*/
const getCustomerNotifications = async(req,res)=>{
    const customer = await findCustomerByToken(req.user);
    let offset = req.query.offset ? parseInt(req.query.offset) : null;
    let limit = req.query.limit ? parseInt(req.query.limit) : null;
    await Notification.findAll({
        where:{
            destinationId:customer.id
        },
        order:[
            ['isNew','DESC'],
            ['createdAt','DESC']
        ],
        offset,limit
    }).then((notifications)=>{
        //apply helper to get the sender details
        return res.status(200).send({
            message:'nofications returned',
            notifications:notifications
        });
    }).catch((err)=>{
        return res.status(500).send({
            message:"error",
            details:err.message
        });
    });
}

const readNotification = async(req,res)=>{
    await Notification.update({isNew:false},{
        where:{
            id:req.body.notificationId
        }
    }).then(()=>{
        return res.status(200).send({
            message:"notification was read"
        });
    }).catch((err)=>{
        return res.status(500).send({
            message:"error",
            details:err.message
        });
    });
}
/*
    Invitation functions for customers
    **invite a friend to reservation**
*/
const inviteGuest = async(req,res)=>{
    const sender = await findCustomerByToken(req.user);
    await Notification.create({
        notificationBody:req.body.notificationBody,
        destinationId:req.body.receiverId,
        destinationType: 'customer',
        sourceId:sender.id,
        sourceType:'customer'
    }).then(()=>{
        return res.status(200).send("invitation sent successfully");
    }).catch((err)=>{
        return res.status(500).send({
            message:"error",
            details:err.message
        });
    });
}



module.exports={
    getCustomerNotifications,
    readNotification,
    inviteGuest
}


