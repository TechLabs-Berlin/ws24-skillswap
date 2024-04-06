/*
API endpoint to send a recommended match to Frontend 
for the MVP this is very high-level and solely based on 
the skillsWanted and skillsOffered to connect users with 
matching results
for real App, this mechanism would call API of DS-Track 
to make more sophisticated recommendations
*/

const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { adminAuth, userAuth } = require('../Auth/auth-middleware');

const cors = require('cors');
const app = express();
app.use(cors());


// FE sends user ID of the requesting user, BE will send back a recommended User for a match
router.route('/skillswap/:id').get(/*userAuth,*/ async (req, res, next) => {
    const userId = req.params.id;
    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        //console.log(user)

        const matches = await User.find({
            $and: [
                { _id: { $ne: user._id } }, // Excludes the original user
                { skillsOffered: { $in: user.skillsWanted } }, // Users offering skills the original user wants
                { skillsWanted: { $in: user.skillsOffered } }  // Users wanting skills the original user offers
            ]
        });
        if (matches.length === 0) {
            return res.status(200).json({
                message: "No matches found.", matches: matches
            });
        }
        return res.status(200).json({ message: `${matches.length} Matches found!`, matches: matches });
    } catch (err) {
        res.status(500).json({ message: "An error occurred", error: err.message });
    }
});


module.exports = router;