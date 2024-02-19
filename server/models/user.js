//users model used for authentication & to save user data in mongoDB

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    /*    id: {
            type: String,
            required: true,
            unique: true,
        },
        // probably not needed if we have unique username?*/
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
        unique: true,
        required: true,
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
    },
    firstName: String,
    lastName: String,
    description: String,
    isAvailable: Boolean,
});
// *using passport* UserSchema.plugin(passportLocalMongoose); //adds username + password to UserSchema

module.exports = mongoose.model('User', UserSchema);