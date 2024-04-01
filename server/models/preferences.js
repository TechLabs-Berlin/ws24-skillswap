// preferences model to save preferences data in mongoDB
// this is no longer used, instead the users preference is written directly in the user data

/*

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PreferenceSchema = new Schema({
    // _id is set automatically by MongoDB
    name: {
        type: String, // in-person, online, hyrid
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Preference', PreferenceSchema);

*/