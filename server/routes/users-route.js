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


// registration routes

router.route('/register').post(register);

/* old code
router.post('/api/register', async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        res.status(201).json({ message: 'User successfully registered', user: registeredUser });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});
*/


//login routes

router.route('/login').post(login);

/* old code
router.get('/login', (req, res) => {
    res.render('users/login');
})

router.post('login', passport.authenticate('local'), { failureFlash: true, failureRedirect: '/login' }, (req, res) => { //passport's login middleware, can also be passport.authenticate('google') for google-login etc.
    res.redirect('/dashboard') // or wherever we want to redirect a freshly logged in user --> ideally save the original URL the user wanted to visit in a variable and send them there, or if none, to the dashboard
})
*/

/*
This piece of code (if....) can be on all routes where authentication is required:

router.get('/url', (req, res) => {
    if (!req.isAuthenticated()) {
        req.flash('error', 'you must be signed in');
        return res.redirect('/login');
    }
    res.render('url');
})

or better: the if...part can be written in a middleware isLoggedIn which will then be passed into each route where authentication is required.

also: store the original URL here and pass it through, so that after the login, the user will get to the page they originally wanted to visit
https://www.youtube.com/watch?v=g7SaXCYCgXU

*/

// Update route (logged-in user only))

router.route('/update/:id').put(userAuth, update);


// Delete route (admin only)

router.route('/delete/:id').delete(adminAuth, deleteUser);

//logout route 
// is handled in Frontend --> destroy Token

// Get All User Data Route (admin only)

router.route('/all_users').get(adminAuth, getAllUsers);

// Get Specific User Data Route (logged-in user only)

router.route('/:id').get(userAuth, getOneUser);

module.exports = router;