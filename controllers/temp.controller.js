const db = require("../models");
const sequelize = db.connection;



exports.findAnalysis = async (req,res) =>{
await sequelize.query(`
        select id, name, 
        (select count(*) as num_tables from "tables" where ("restaurant_branches"."id" = "tables"."restaurantBranchId")),
        (select count(*) as num_reservation from "reservations" where ("restaurant_branches"."id" = "reservations"."restaurantBranchId")),
        (select name as city from "cities"  where ("restaurant_branches"."cityId" = "cities"."id") ),
        (select name as district from "districts"  where ("restaurant_branches"."districtId" = "districts"."id"))
        from "restaurant_branches" where "restaurant_branches"."restaurantId"=${req.params.id};
    `).then(([data,meta]) => {
        if(!data) { 
            return res.status(404).send({
                message: 'data Not Found',
            });
        }
        return res.status(200).send({
            message: "data returned",
            data: data
        });
    })
    .catch((error) => res.status(500).send(error.message));
}

module.exports = exports;