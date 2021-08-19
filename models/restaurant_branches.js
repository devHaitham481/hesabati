module.exports = (sequelize, Sequelize) => { 
    const RestaurantBranch = sequelize.define('restaurant_branches', { 
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
            allowNull: false
        },
        name_en: { 
            type: Sequelize.STRING,
            notEmpty: true,
            //notNull: true
        }, 
        name_ar: {
            type: Sequelize.STRING
        },
        description_en: { 
            type: Sequelize.TEXT
        },
        description_ar: {
            type: Sequelize.TEXT
        },
        email: { 
            type: Sequelize.STRING,
            isEmail: true, 
        }, 
        phoneNumber: {
            type: Sequelize.INTEGER
        },
        address_en: {
            type: Sequelize.TEXT
        },
        address_ar: {
            type: Sequelize.TEXT
        },
        country_code: {
            type: Sequelize.CHAR(25)
        }, 
        image: { 
            type: Sequelize.STRING,
            isUrl: true
        },
        latitude: { 
            type: Sequelize.DECIMAL
        },
        longitude: {
            type: Sequelize.DECIMAL
        }, 
        workingHours: { 
            type: Sequelize.STRING
        },
        workingDays: { 
            type: Sequelize.STRING
        }, 
        offDays: { 
            type: Sequelize.STRING
        }, 
        locationAddress: { 
            type: Sequelize.TEXT
        },
        locationCity: { 
            type: Sequelize.STRING(45)
        }, 
        status: {
            type: Sequelize.SMALLINT
        }, 
        hasParking: {
            type: Sequelize.BOOLEAN
        },
        instruction: {
            type: Sequelize.TEXT
        },
        /*locationZoom: { 
            type: Sequelize.INTEGER
        }, */
        isActive: {
            type: Sequelize.BOOLEAN
        },
        isDeleted: { 
            type: Sequelize.BOOLEAN
        },
        // Foreign Keys
        // restaurantId: { 
        //     type: Sequelize.INTEGER
        // },
        // districtId: {
    //         type: Sequelize.INTEGER
    // }
        
     //   }
        

    });
    return RestaurantBranch;
};

