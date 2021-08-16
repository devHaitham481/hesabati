const db = require("../models")
const Customer = db.Customer;
const Op = db.Sequelize.Op; 
const where = db.Sequelize.where; 
const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwt.config');
const { findCustomerByEmail, findCustomerByPhoneNumber, findCustomerByUsername } = require('../helpers/customerHelper');
const { verifyPassword } = require("../helpers/authHelper");


exports.signup = (req, res) => { 
    console.log(req.body) 
    if ((!req.body.phoneNumber || req.body.email) && !req.body.password) { 
        res.status(400).send({ 
            message: 'Please provide all the fields.'
        });
        return; 
    }

    const newCustomer = {
        phoneNumber: req.body.phoneNumber,
        email: req.body.email, 
        password: req.body.password, 
        gender: req.body.gender
    };
    Customer.create(newCustomer)
            .then( data => { 
                res.send({
                    message: "Signup Successful!"
                });
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while signing you up",
                    errObj: err
                });
            });
};

exports.login = async (req, res) => { 
    console.log(req.body)
    // true if either phoneNumber or Email is available along with a valid password
    if((!req.body.phoneNumber || req.body.email) && (!req.body.password)) {
        res.status(400).send({
            message: 'Please provide phone number/email and password'
        });

    }
    customer = null;
    if (req.body.phoneNumber) { 
        customer = await findCustomerByPhoneNumber(req.body.phoneNumber);
    } else if (req.body.email) {
        customer = await findCustomerByEmail(req.body.email);
    };
    if (customer == null || !(customer instanceof Customer)) { 
        res.status(403).send({ 
            message: "Invalid Credentials!"
        });
    } else {
        if (customer.verifyPassword(req.body.password)) { 
            res.status(200).send({
                message: "Login Successful", 
                token: jwt.sign({
                    phoneNumber: customer.phoneNumber, 
                    password: customer.password
                }, secret)
            })
        }
        else { 
            res.status(403).send({
                message: "Invalid Credentials!"
            });
        }
    }
};



exports.changePassword = async (req, res) => { 
    console.log(req.body)
    if(!req.body.oldpassword || !req.body.newpassword) { 
        res.status(400).send({
            message: 'Please provide both old and new password.'
        });
    } console.log("HELO");
    customer = await findCustomerByPhoneNumber(req.body.phoneNumber); 
    if (customer == null || !(customer instanceof Customer)) {
        res.status(403).send({
            message: "Invalid Credentials!"
        });
        
    } 
     else { 
        if (customer.verifyPassword(req.body.oldpassword)) { 
            customer.update({
                password: req.body.newpassword
            }, {
                where: {
                    id: customer.id
                }
            });
            res.status(200).send({
                message: "Password Updated Successfully!"
            })
        } else { 
            res.status(403).send({
                message: "Invalild Old Password! Please recheck."
            });
        }

        }
};

exports.verifyPassword = async (req, res) => { 
    console.log(req.body)

    if(!req.body.password) { 
        res.status(400).send({
            message: 'Please provide your password to re-authenticate.'
        });
    }
    customer = await findCustomerByUsername(req.customer.username);
    if (customer == null || !(customer instanceof Customer)) { 
        res.status(403).send({
            message: "Invalid Credentials!"
        });
    } else { 
        if (customer.verifyPassword(req.body.password)) { 
            res.status(200).send({
                message: "Password Verification Successful!"
            })
        } else { 
            res.status(403).send({
                message: "Invalid Password! Please recheck."
            });
        }
        }
    };

module.exports = exports;