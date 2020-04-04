const User = require('../../models/User')
const UserSession = require('../../models/UserSession')
const router = require("express").Router();


module.exports = (app) => {

    app.post('/signup', (req, res, next) => {

        const { body } = req;
        const {
            firstName,
            lastName,
            password
        } = body;
        let {
            email
        } = body;
        if (!firstName) {
            return res.send({
                success: false,
                message: 'Error: First name cannot be blank'
            })
        }
        if (!lastName) {
            return res.send({
                success: false,
                message: 'Error: Last name cannot be blank'
            })
        }
        if (!email) {
            return res.send({
                success: false,
                message: 'Error: Email cannot be blank'
            })
        }
        if (!password) {
            return res.send({
                success: false,
                message: 'Error: Password cannot be blank'
            })
        }
        email = email.toLowerCase();

        // Steps: 1. Verify email doesn't exist, 2. Save 
        User.find({
            email: email
        }, (err, previousUsers) => {
            console.log("Got to this")
            if (err) {
                res.end({
                    success: false,
                    message: 'Error: Server error'
                })
            } else if (previousUsers.length > 0) {
                res.end({
                    success: false,
                    message: 'Error: Account already exists.'
                });
            }

            //save the new user

            const newUser = new User();

            newUser.email = email;
            newUser.firstName = firstName;
            newUser.lastName = lastName;
            newUser.password = newUser.generateHash(password);
            newUser.save((err, user) => {
                if (err) {
                    res.end({
                        success: false,
                        message: 'Error: Server error'
                    });
                }
                res.end({
                    success: true,
                    message: 'Signed up'
                });
            });
        });


    });

    app.post('/api/account/signin', (req, res, next) => {
        const { body } = req;
        const {
            password
        } = body;
        let {
            email
        } = body;
        if (!email) {
            return res.send({
                success: false,
                message: 'Error: Email cannot be blank'
            })
        }
        if (!password) {
            return res.send({
                success: false,
                message: 'Error: Password cannot be blank'
            })
        }

        email = email.toLowerCase();

        User.find({
            email: email
        }, (err, users) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: server error'
                });
            }
            if (users.length !== 1) {
                return res.send({
                    succes: false,
                    message: 'Error: Invalid'
                });
            }
            const user = users[0];
            if (!user.validPassword(password)) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid'
                });
            }
            const user = users[0];
            //otherwise correct the user
            const userSession = new UserSession();

            userSession.userId = user._id;
            userSession.save((err, doc) => {
                if (err) {
                    return res.send({
                        success: false,
                        message: 'Error: server error'
                    });
                }
                return res.send({
                    success: true,
                    message: 'Valid sign in!!!',
                    token: doc._id,
                    userId: user._id
                    // todo: add user Token, don't actually have it yet!
                    //every time they log in they create a document id, the token points back to user id//
                });

            });

        });
    });
    app.get('/api/account/verify', (req, res, next) => {
        const { query } = req;
        const { token } = query
        UserSession.find({
            _id: token,
            isDeleted: false
        }, (err, sessions) => {
            if (err) {
                console.log(err);
                return res.send({
                    success: false,
                    message: "Error: Server error"
                });
            }
            if (sessions.length != 1) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid'
                });
            } else {
                return res.json(sessions)
            }

        });
    });

    app.get('/api/account/logout', (req, res, next) => {
        const { query } = req;
        const { token } = query;

        // Verify the token is one of a kind and is not deleted.

        UserSession.findOneandUpdate({
            _id: token,
            isDeleted: false
        }, {
            $set: { isDeleted: true }
        }, null, (err, sessions) => {
            if (err) {
                console.log(err);
                return res.send({
                    success: false,
                    message: "Error: Server error"
                });
            }

            return res.send({
                success: true,
                message: 'Good'
            });
        });
    });


}