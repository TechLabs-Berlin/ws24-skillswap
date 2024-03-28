// skill categories model to save categories data in mongoDB

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    // _id is set automatically by MongoDB
    name: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Category', CategorySchema);