const db = require('../models');
const OrderDetails = db.OrderDetails;

const deleteOrderItems = async (order_id) =>{
    await OrderDetails.destroy({
        where:{
            orderId:order_id
        }
    });
}

module.exports = {
    deleteOrderItems
}
