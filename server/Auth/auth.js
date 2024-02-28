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

// update a user & userdata

exports.update = async (req, res, next) => {
    const { id, updates } = req.body;
    /* 'updates' is an object with key value pairs, consisting of one or more of the following:
    email: new_email
    role: new_role
    username: new_username
    password: new_password
    firstName: new_firstName
    lastName: new_lastName
    description: new_description
    isAvailable: new_isAvailable(Boolean) 
    
    
    for full list see models/user.js */

    if (!id || !updates) {
        return res.status(400).json({
            message: 'Missing required fields'
        });
    }

    try {
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // apply updates
        for (let key in updates) {
            user[key] = updates[key];
        }

        await user.save();
        res.status(201).json({ message: 'Update successful', user });
    } catch (error) {
        res.status(400).json({ message: 'An error occurred', error: error.message });
    }

};

// delete function to delete specific users

exports.deleteUser = async (req, res, next) => {
    const { id } = req.body;
    await User.findByIdAndDelete(id)
        //.then(user => user.deleteOne({ _id: id }))
        .then(user =>
            res.status(201).json({ message: 'User successfully deleted', user })
        )
        .catch(error =>
            res.status(400).json({ message: 'An error occurred', error: error.message })
        )
}


/*

{
  "username": "RegEx666",
  "email": "ho123@olong.cn",
  "password": "12rfg34556dfdf"
}


*/

//next step:
// Authenticate Users with JSON Web Token (JWT)
// https://www.loginradius.com/blog/engineering/guest-post/nodejs-authentication-guide/