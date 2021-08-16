const db = require("../models");
const Menu = db.Menu;
const DishType = db.DishType;
const DishClassification = db.DishClassification;

const findOne = async(req,res)=>{
    const id = req.params.id;
    await Menu.findAll({
        where:{
            branchId:id
        },
        include:[
            {
                model:DishType,
                as:"dishType"
            },
            {
                model:DishClassification,
                as:"dishClassification"
            }
        ]
    })
    .then((menu)=>{
        res.status(200).send({
        message:"menu returned successfully",
        data: menu
    })})
    .catch((error) => { res.status(400).send(error)});
};


module.exports = {
    findOne
}