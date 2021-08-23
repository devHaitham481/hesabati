const db = require("../models")
const Customer = db.Customer;
const Op = db.Sequelize.Op; 
const where = db.Sequelize.where; 
const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwt.config');
const { findCustomerByEmail, findCustomerByPhoneNumber, findCustomerByUsername,findCustomerByToken } = require('../helpers/customerHelper');
const { verifyPassword } = require("../helpers/authHelper");

//find profile without events
exports.findProfile = async(req,res) => {
    const customer = await findCustomerByToken(req.user);
    await Customer.findByPk(customer.id).then((customer)=>{
        res.status(200).send({
        message:"profile loaded successfully",
        data:{
            firstName: customer.firstName,
            lastName: customer.lastName,
            phoneNumber: customer.phoneNumber,
        }
    })}).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while loading profile",
            errObj: err
        });
    });
}


exports.updateProfile = async(req,res) => {
    const customer = await findCustomerByToken(req.user);
    await Customer.update(
        {
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            phoneNumber:req.body.phoneNumber,
            email:req.body.email
        },
        {
            where:{
            id:customer.id
            }
        }
    ).then(
        res.status(200).send({
            message:"profile updated successfully",
            data:{
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                phoneNumber:req.body.phoneNumber,
                email:req.body.email,
                token: jwt.sign({
                    phoneNumber: req.body.phoneNumber, 
                    password: req.body.password
                }, secret)
            }
        })
    ).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while uploading profile",
            errObj: err
        });
    });
}

exports.signup = (req, res) => { 
    console.log(req.body) 
    if ((!req.body.phoneNumber || req.body.email) && !req.body.password) { 
        res.status(400).send({ 
            message: 'Please provide all the fields.'
        });
        return; 
    }

    const newCustomer = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
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
    } 
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