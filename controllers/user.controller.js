const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
const where = db.Sequelize.where;
const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwt.config');
const { findUserByEamil, findUserByPhoneNumber, findUserByUsername } = require('../helpers/userHelper');

exports.signup = (req, res) => {
    console.log(req.body)
    if (!req.body.phonenumber, !req.body.email, !req.body.password) {
        res.status(400).send({
            message: 'Please provide all the fields.'
        });
        return;
    }
	
    // Create the User Record
    const newUser = {
				username: req.body.username,
        phonenumber: req.body.phonenumber,
        email: req.body.email,
        password: req.body.password
    }

    User.create(newUser)
        .then(data => {
            res.send({
                message: "Signup Successful!"
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while signing you up.",
                errObj: err
            });
        });
}

exports.login = async (req, res) => {
    console.log(req.body)

    if ((!req.body.phonenumber && !req.body.email) || (!req.body.password)) {
        res.status(400).send({
            message: 'Please provide username/email and password.'
        });
    }
    user = null;
    if (req.body.phonenumber) {
        user = await findUserByPhoneNumber(req.body.phonenumber);
    } else if (req.body.email) {
        user = await findUserByEamil(req.body.email);
    }
    if (user == null || !(user instanceof User)) {
        res.status(403).send({
            message: "Invalid Credentials!"
        });
    } else {
        if (user.verifyPassword(req.body.password)) {
            res.status(200).send({
                message: "Login Successful",
                token: jwt.sign({
                    phonenumber: user.phonenumber,
                    email: user.email
                }, secret)
            })
        } else {
            res.status(403).send({
                message: "Invalid Credentails!"
            });
        }
    }
}



exports.changepassword = async (req, res) => {
    console.log(req.body)

    if (!req.body.oldpassword || !req.body.newpassword) {
        res.status(400).send({
            message: 'Please provide both old and new password.'
        });
    }
    user = await findUserByUsername(req.body.username);
    if (user == null || !(user instanceof User)) {
        res.status(403).send({
            message: "Invalid Credentials!"
        });
    } else {
        if (user.verifyPassword(req.body.oldpassword)) {
            user.update({
                password: req.body.newpassword
            }, {
                where: {
                    id: user.id
                }
            });
            res.status(200).send({
                message: "Password Updated Successfully!"
            })
        } else {
            res.status(403).send({
                message: "Invalid Old Password! Please recheck."
            });
        }
    }
}

exports.verifypassword = async (req, res) => {
    console.log(req.body)

    if (!req.body.password) {
        res.status(400).send({
            message: 'Please provide your password to re-authenticate.'
        });
    }
    user = await findUserByUsername(req.user.username);
    if (user == null || !(user instanceof User)) {
        res.status(403).send({
            message: "Invalid Credentials!"
        });
    } else {
        if (user.verifyPassword(req.body.password)) {
            res.status(200).send({
                message: "Password Verification Successful!"
            })
        } else {
            res.status(403).send({
                message: "Invalid Password! Please recheck."
            });
        }
    }
}

module.exports = exports;
