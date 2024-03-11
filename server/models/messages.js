// messages model to save messages data in mongoDB

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    // _id is set automatically by MongoDB
    senderId: {
        type: Schema.Types.ObjectId,
        ref: 'User', // User ID of sender
        required: true
    },
    receiverId: {
        type: Schema.Types.ObjectId,
        ref: 'User', // User ID of receiver
        required: true
    },
    sentAt: {
        type: Date,
        required: true,
        default: Date.now // Automatically sets to current date/time when a message is created
    },
    text: {
        type: String, // message content
        required: true
    }
});

module.exports = mongoose.model('Message', MessageSchema);