const User = require('../models/user');
const bcrypt = require('bcryptjs');

// registration:

const jwt = require('jsonwebtoken');
const jwtSecret = 'eeca557f5623e420aec719bdea48493fb584f14c2636016ee2c938a91836757fddc25d';

exports.register = async (req, res, next) => {
    const { username, email, password } = req.body;
    if (password && password.length < 6) {
        return res.status(400).json({ message: 'Password less than 6 characters' })
    }
    bcrypt.hash(password, 10).then(async (hash) => {
        await User.create({
            username,
            email,
            password: hash,
        }).then((user) => {
            const maxAge = 3 * 60 * 60;
            const token = jwt.sign(
                { id: user._id, username, role: user.role },
                jwtSecret,
                {
                    expiresIn: maxAge, // 3hrs in sec
                }
            );
            res.cookie('jwt', token, {
                httpOnly: true,
                // secure: true, // requires https, does not work when testing locally
                maxAge: maxAge * 1000 // 3hrs in ms
            });
            res.status(201).json({
                message: 'User successfully created',
                user: user._id,
            });
        })
            .catch((error) =>
                res.status(400).json({
                    message: 'User could not be created',
                    error: error.message,
                })
            );
    });
}

// login:

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    // check if username and passwort are provided
    if (!email || !password) {
        return res.status(400).json({
            message: 'Username or Password not present',
        })
    }
    try {
        const user = await User.findOne({ email })
        if (!user) {
            res.status(401).json({
                message: 'Login not successful',
                error: 'User not found',
            })
        } else {
            bcrypt.compare(password, user.password).then(function (result) {
                if (result) {
                    const maxAge = 3 * 60 * 60;
                    const token = jwt.sign(
                        { id: user._id, email, role: user.role },
                        jwtSecret,
                        {
                            expiresIn: maxAge, // 3hrs in sec
                        }
                    );
                    res.cookie('jwt', token, {
                        httpOnly: true,
                        // secure: true, // requires https, does not work when testing locally
                        maxAge: maxAge * 1000, // 3hrs in ms
                    });
                    res.status(200).json({
                        message: 'Login successful',
                        user: user._id,
                    });
                } else {
                    res.status(400).json({ message: 'Login not successful' });
                }
            });
        }
    } catch (error) {
        res.status(400).json({
            message: 'An error occurred',
            error: error.message,
        })
    }
};

/* old code now separated from auth into user-route.js

// update a user & userdata

exports.update = async (req, res, next) => {
    const id = req.params.id;
    const updates = req.body;

    if (!id || !updates || Object.keys(updates).length === 0) {
        return res.status(400).json({
            message: 'Missing required fields or no updates provided'
        });
    }

    try {
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // apply updates
        for (let key in updates) {
            if (user[key] !== undefined) { // ensure only existing fields are updated
                user[key] = updates[key];
            }
        }

        await user.save();
        res.status(200).json({ message: 'Update successful', user: user.toObject() }); // Use 200 for successful updates
    } catch (error) {
        res.status(400).json({ message: 'An error occurred', error: error.message });
    }
};


// delete function to delete specific users

exports.deleteUser = async (req, res, next) => {
    const id = req.params.id;
    await User.findByIdAndDelete(id)
        .then(user =>
            res.status(201).json({ message: 'User successfully deleted', user })
        )
        .catch(error =>
            res.status(400).json({ message: 'An error occurred', error: error.message })
        )
}



// get all user data

exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find(); // Fetch all users
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: "An error occurred", error: err.message });
    }
}

// get data for a specific user(by user id)

exports.getOneUser = async (req, res, next) => {
    const userId = req.params.id;
    // only admins or the specific user themself can get the user data --> might need to change this so any user can get all user data if the app requires it
    if (req.user.id.toString() === userId.toString() || req.user.role === 'admin') { // Check if it's the user's own data or if the user is an admin
        try {
            const user = await User.findById(userId);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: "User not found" });
            }
        } catch (err) {
            res.status(500).json({ message: "An error occurred", error: err.message });
        }
    } else {
        res.sendStatus(403); // Forbidden
    }
}

*/ 

/*

test user:
{
  "username": "Testuser",
  "email": "testuser@gmail.com",
  "password": "1234567abcde!"
}

*/

// user auth is mostly based on this manual:
// https://www.loginradius.com/blog/engineering/guest-post/nodejs-authentication-guide/