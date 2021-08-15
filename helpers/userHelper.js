const db = require("../models");
const User = db.User;
const Op = db.Sequelize.Op;
const where = db.Sequelize.where;

async function findUserByPhoneNumber(phoneNumber) { 
	try { 
		users = await User.findAll({ 
			where: {
				phoneNumber: phoneNumber
			}
		})
		return (users instanceof Array) ? users[0] :null; 
	} catch (ex) { 
		throw ex; 
	} 
};


async function findUserByEamil(email) {
    try {
        users = await User.findAll({
            where: {
                email: email
            }
        })
        return (users instanceof Array) ? users[0] : null;
    } catch (ex) {
        throw ex;
    }
};


 const findUserByUsername = async (username) => {
    try {
        users = await User.findAll({
            where: {
                username: username
            }
        })
        return (users instanceof Array) ? users[0] : null;
    } catch (ex) {
						console.log(ex);
        throw ex;
						
    }
};

module.exports = { 
	findUserByPhoneNumber: findUserByPhoneNumber, 
	findUserByUsername: findUserByUsername, 
	findUserByEamil: findUserByEamil 

};
