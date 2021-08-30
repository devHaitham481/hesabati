const db = require('../models');
const Table = db.Table;
const TablePhoto = db.TablePhoto;

const findAll = async(req,res)=>{
    await Table.findAll({
        where:{
            restaurantBranchId:req.body.restaurantBranchId
        },
        include:[
            {
                model:TablePhoto
            }
        ],
        order:[['id','ASC']]
    }).then((tables)=>{
        return res.status(200).send({
            message:"Tables returend",
            tables:tables
        })
    }).catch((error)=>{
        return res.status(500).send({
            message:"error",
            details:error.message
        })
    })
}

module.exports={
    findAll
}