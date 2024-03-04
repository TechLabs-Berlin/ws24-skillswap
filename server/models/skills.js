// skills model to save skills data in mongoDB

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
    // _id is set automatically by MongoDB
    name: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Skill', SkillSchema);