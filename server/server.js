const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: './mongodb_access.env' });
const connectDB = require('./db');
const cookieParser = require('cookie-parser');
const { adminAuth, userAuth } = require('./Auth/auth-middleware.js');

//connect database

connectDB();

// imports User Authentication:
/*
const passport = require('passport');
const LocalStrategy = require('passport-local');
const user = require('./models/user');
*/
const app = express();

app.use(cors(
    {
        methods: ['GET', 'POST', 'PUT', 'UPDATE', 'DELETE'],
        origin: '*'
    }
));
app.use(express.json());
app.use(cookieParser());

/* commented out because currently not using passport for Auth
// app.use Auser Authentication:

app.use(passport.initialize());
app.use(passport.session()); // must be below "app.use(session(sessionConfig));"
passport.use(new LocalStrategy(User.authenticate()));

//get a User into and out of a session with passport-local-mongoose:

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
*/

//set standard server message for trial purpose:

app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});


//authentication & user data routes
app.use('/api/auth', require('./routes/auth-route.js'));

//other routes: user data, skills, preferences, messages
app.use('/api', require('./routes/users-route.js'));
app.use('/api', require('./routes/skills-route.js'));
// app.use('/api', require('./routes/preferences-route.js')); //no longer in use
app.use('/api', require('./routes/messages-route.js'));
app.use('/api', require('./routes/categories-route.js'));

// route for skill-swap-mechanism
app.use('/api', require('./routes/skillswap-route.js'));

//run server on port 8000:

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});