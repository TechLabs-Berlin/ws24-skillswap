const express = require('express');
const router = express.Router();
const passport = require('passport'); //currently not in use
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const { adminAuth, userAuth } = require('../Auth/auth-middleware');



// cors for secure communication between frontend and backend
const cors = require('cors');
const app = express();
app.use(cors());

/* Auth routes no longer part of user routes
// registration route

router.route('/register').post(register);

//login route

router.route('/login').post(login);
*/

// Create route --> similar to Auth/register route, but won't send cookie for Auth

router.route('/users/create').post(/*adminAuth,*/ async (req, res, next) => {
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
            res.status(201).json({
                message: 'New user successfully created',
                user: user._id,
            })
        })
            .catch((err) => {
                res.status(400).json({
                    message: 'User could not be created',
                    error: err.message,
                })
            })
    })
});


// Retrieve/Get route

// Get All User Data Route (logged-in user or admin only)

router.route('/users').get(/*userAuth,*/ async (req, res, next) => {
    try {
        const users = await User.find(); // Fetch all users
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: "An error occurred", error: err.message });
    }
});

// Get Specific User Data Route (logged-in user or admin only)

router.route('/users/:id').get(/*userAuth,*/ async (req, res, next) => {
    const userId = req.params.id;
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
});

// Update route (logged-in user or admin only))

router.route('/users/update/:id').put(/*userAuth,*/ async (req, res, next) => {
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
});

// update a user's password

router.route('/users/passwordupdate/:id').put(/*userAuth,*/ async (req, res, next) => {
    const { id } = req.params;
    const { password } = req.body;

    // Check if the password is provided and is valid
    if (!password || password.length < 6) {
        return res.status(400).json({
            message: 'Password must be at least 6 characters long'
        });
    }

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Hash the new password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        // Update user's password
        user.password = hash;
        await user.save();

        res.status(200).json({
            message: 'Password updated successfully'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error updating password',
            error: error.message
        });
    }
});





// Delete route (admin only)

router.route('/users/delete/:id').delete(adminAuth, async (req, res, next) => {
    const id = req.params.id;
    await User.findByIdAndDelete(id)
        .then(user =>
            res.status(201).json({ message: 'User successfully deleted', user })
        )
        .catch(error =>
            res.status(400).json({ message: 'An error occurred', error: error.message })
        )
});


module.exports = router;

/*

example user:

{
    "username": "test1234",
    "email": "test1234@gmail.com",
    "password": "testpassword1234"
}

admin user:
{
  "username": "admin",
  "email": "admin@skillswap.com",
  "password": "skillswap"
}

*/