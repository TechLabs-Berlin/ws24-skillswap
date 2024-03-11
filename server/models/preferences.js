// preferences model to save preferences data in mongoDB

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