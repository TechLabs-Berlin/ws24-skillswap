const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: './mongodb_access.env' });
const connectDB = require('./db');
const cookieParser = require('cookie-parser');

//connect database

connectDB();

// imports User Authentication:
/*
const passport = require('passport');
const LocalStrategy = require('passport-local');
const user = require('./models/user');
*/
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

/*
// app.use Auser Authentication:

app.use(passport.initialize());
app.use(passport.session()); // must be below "app.use(session(sessionConfig));"
passport.use(new LocalStrategy(User.authenticate()));

//get a User into and out of a session with passport-local-mongoose:

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//set standard server message for trial purpose:
*/
app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});


//register post route
app.use("/api/auth", require("./routes/users-route"));

//run server on port 8000:

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});