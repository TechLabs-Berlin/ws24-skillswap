//users model used for authentication & to save user data in mongoDB

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose'); // currently not in use

function arrayLimit(limit) {
    return function (validator) {
        // Checks if the array's length is within the allowed limit
        return validator.length >= 1 && validator.length <= limit;
    };
}

const UserSchema = new Schema({
    //_id is set automatically by MongoDB
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        enum: ['Basic', 'admin'],
        default: 'Basic',
        required: true,
    },
    username: {
        type: String,
        //    unique: true,
        required: true,
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
    },
    description: String,
    isAvailable: Boolean,
    /*swapPreference: {
        type: [{
            type: String,
            enum: ['in-person', 'online', 'hybrid']
        }],
        validate: [arrayLimit(3), '{PATH} exceeds the limit of 3'] //can select all 3
    },
    langPreference: {
        type: [{
            type: String,
            enum: ['English', 'French', 'German', 'Spanish', 'Arabic', 'Mandarin']
        }],
        validate: [arrayLimit(6), '{PATH} exceeds the limit of 6'] // can select all 6
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true // Only required if 'location' is provided
        },
        coordinates: {
            type: [Number], // example: [-73.856077, 40.848447]
            required: true // Only required if 'location' is provided
        }
        // 'location' itself is optional by not being marked as required
    },*/
    skillsOffered: [{
        type: Schema.Types.ObjectId,
        ref: 'Skill' // ID of skills model --> array of skills (_id) the user offers to teach
    }],
    skillsWanted: [{
        type: Schema.Types.ObjectId,
        ref: 'Skill' // ID of skills model --> array of skills (_id) the user wants to learn
    }]
});
// *using passport* UserSchema.plugin(passportLocalMongoose); //adds username + password to UserSchema


// The coordinates field is indexed as 2dsphere to enable MongoDB's geospatial queries on this field
UserSchema.index({ "location.coordinates": "2dsphere" });

module.exports = mongoose.model('User', UserSchema);