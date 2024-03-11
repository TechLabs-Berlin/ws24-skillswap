//users model used for authentication & to save user data in mongoDB

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    //_id is set automatically by MongoDB
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
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
    preference: {
        type: Schema.Types.ObjectId,
        ref: 'Preference' // ID of preference model --> user can only have 1 preference
    },
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

module.exports = mongoose.model('User', UserSchema);