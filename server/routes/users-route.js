const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');
const { register, login, update, deleteUser, getAllUsers, getOneUser } = require('../Auth/auth');
const { adminAuth, userAuth } = require('../Auth/auth-middleware');



// cors for secure communication between frontend and backend
const cors = require('cors');
const app = express();
app.use(cors());


// registration route

router.route('/register').post(register);

//login route

router.route('/login').post(login);

// Update route (logged-in user or admin only))

router.route('/update/:id').put(userAuth, update);

// Delete route (admin only)

router.route('/delete/:id').delete(adminAuth, deleteUser);

//logout route 
// is handled in Frontend --> destroy Token

// Get All User Data Route (admin only)

router.route('/all_users').get(adminAuth, getAllUsers);

// Get Specific User Data Route (logged-in user or admin only)

router.route('/:id').get(userAuth, getOneUser);

module.exports = router;