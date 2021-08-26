module.exports = (sequelize, Sequelize) => { 
    const RestaurantBranchLocale = sequelize.define('restaurant_branches_locale', { 
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
            allowNull: false
        },
        name_ar: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        description_ar: {
            type: Sequelize.TEXT
        },
        address_ar: {
            type: Sequelize.TEXT
        },
        // address_ar: {
        //     type: Sequelize.TEXT
        // },
        workingDays_ar: { 
            type: Sequelize.STRING
        }, 
        instruction_ar: {
            type: Sequelize.TEXT
        },
        /*locationZoom: { 
            type: Sequelize.INTEGER
        }, */
        // Foreign Keys
        // restaurantId: { 
        //     type: Sequelize.INTEGER
        // },
        // districtId: {
    //         type: Sequelize.INTEGER
    // }
        
     //   }
    });
    return RestaurantBranchLocale;
};