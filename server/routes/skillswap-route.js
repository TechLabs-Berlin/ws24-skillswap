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

function calculateDistance(coordinatesUser1, coordinatesUser2) {
    /* 
    in this first version of the MVP this will only return a random
     number between 0.1 and 9.9, the final version should calculate 
     the actual distance between users.
     The number returned is the kilometer between 2 users' locations.
    */
    const minNum = 1;
    const maxNum = 99;
    let distance = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    return distance / 10; // returns value between 0.1 km and 9.9 km
}


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

        // if matches are found, only the relevant data should be sent back to Frontend:
        const resMatches = matches.map(match => ({
            _id: match._id,
            username: match.username,
            description: match.description,
            skillLevel: match.skillLevel,
            isAvailable: match.isAvailable,
            swapPreference: match.swapPreference,
            distance: calculateDistance(user.location.coordinates, match.location.coordinates),
            completedSkillSwaps: match.skillSwaps.filter(swap => !swap.isActive).length,
            matchingSkills: {
                ownSkillOffered: user.skillsOffered.find(skill => match.skillsWanted.includes(skill)),
                matchSkillOffered: match.skillsOffered.find(skill => user.skillsWanted.includes(skill))
            }
        }));


        //console.log(resMatches[0].username, resMatches[1].username)
        return res.status(200).json({ message: `${matches.length} Matches found!`, matches: resMatches });
    } catch (err) {
        res.status(500).json({ message: "An error occurred", error: err.message });
    }
});

/*
Need to modify:
When Frontend flags a potential match as 'declined' by the user,
this match should be excluded from the matches next time FE sends
the request to this API endpoint.
*/

module.exports = router;