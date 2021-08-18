module.exports = (sequelize, Sequelize) => { 
    const RestaurantBranch = sequelize.define('restaurant_branches', { 
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
            allowNull: false
        },
        name: { 
            type: Sequelize.STRING,
            notEmpty: true,
            notNull: true
        }, 
        description: { 
            type: Sequelize.TEXT
        },
        email: { 
            type: Sequelize.STRING,
            isEmail: true, 
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
        contact: { 
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

