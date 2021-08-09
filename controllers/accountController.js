const db = require("../models");

function signUp(req, res) {
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
            message: 'First name cannot be blank'
        })
    }
    if (!lastName) {
        return res.send({
            success: false,
            message: 'Last name cannot be blank'
        })
    }
    if (!email) {
        return res.send({
            success: false,
            message: 'Email cannot be blank'
        })
    }
    if (!password) {
        return res.send({
            success: false,
            message: 'Password cannot be blank'
        })
    }
    email = email.toLowerCase();

    // Steps: 1. Verify email doesn't exist, 2. Save 
    db.User.find({
        email: email
    }, (err, previousUsers) => {
        console.log("Got to this")
        if (err) {
            return res.send({
                success: false,
                message: 'Server error'
            })
        } else if (previousUsers.length > 0) {
            return res.send({
                success: false,
                message: 'This email is already registered.'
            });
        }

        //save the new user

        let newUser = new db.User();

        newUser.email = email;
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.password = newUser.generateHash(password);
        newUser.save()
            .then(user => {
                console.log(user);
                signIn(req, res)
            })
            .catch(err => console.log(err));
    });
}

function signIn(req, res, next) {
    let {body: {password, email}} = req;

    if (!email) {
        return res.send({
            success: false,
            message: 'Email cannot be blank'
        })
    }
    if (!password) {
        return res.send({
            success: false,
            message: 'Password cannot be blank'
        })
    }

    email = email.toLowerCase();

    db.User.find({
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
        const userSession = new db.UserSession();
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
                message: 'Valid sign in',
                token: doc._id,
                userId: userSession.userId,
                firstName: user.firstName
                //every time they log in they create a document id, the token points back to user id//
            });
        });
    })
}

function verify(req, res, next) {
    const { query } = req;
    const { token } = query
    db.UserSession.find({
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
            req.user = sessions;
            return res.json(sessions)
        }

    });
}

function logout(req, res, next) {
    const { query } = req;
    const { token } = query;

    // Verify the token is one of a kind and is not deleted.

    db.UserSession.findOneAndUpdate({
        _id: token,
        isDeleted: false
    }, {
        $set: {
            isDeleted: true
        }
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
}

module.exports = {
    signUp,
    signIn,
    verify,
    logout
}