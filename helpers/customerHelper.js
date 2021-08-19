const db = require("../models");
const Customer = db.Customer;
const Op = db.Sequelize.Op;
const where = db.Sequelize.where;

async function findCustomerByToken(user) { 
    try { 
        customers = await Customer.findAll({
            where: {
                phoneNumber: user.phoneNumber
            }
        })
        return (customers instanceof Array) ? customers[0] :null; 
    } catch(ex) { 
        throw ex;
    }
    };

async function findCustomerByPhoneNumber(phoneNumber) { 
    try { 
        customers = await Customer.findAll({
            where: {
                phoneNumber: phoneNumber
            }
        })
        return (customers instanceof Array) ? customers[0] :null; 
    } catch(ex) { 
        throw ex;
    }
    };

async function findCustomerByEmail(email) {
    try {
        customers = Customer.findAll({
            where: {
                email: email
            }
        })
        return (customers instanceof Array) ? customers[0] : null;
    } catch(ex) { 
        throw ex; 
    }
};

module.exports = {
    findCustomerByPhoneNumber: findCustomerByPhoneNumber, 
    findCustomerByEmail: findCustomerByEmail,
    findCustomerByToken:findCustomerByToken
};

