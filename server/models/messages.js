// messages model to save messages data in mongoDB

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    // _id is set automatically by MongoDB
    senderId: {
        type: String, //User ID of sender
        required: true
    },
    receiverId: {
        type: String, //User ID of receiver
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

/*
add-on for later: directly connect sender and receiver to User database:

senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
    required: true
},
receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
},
*/