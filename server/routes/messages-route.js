const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Message = require('../models/messages');
const User = require('../models/user');
const { adminAuth, userAuth } = require('../Auth/auth-middleware');

const cors = require('cors');
const app = express();
app.use(cors());

// create message (users or admins)
router.route('/messages/create').post(/*userAuth,*/ async (req, res, next) => {
    const { senderId, receiverId, sentAt, text } = req.body;
    await Message.create({
        senderId,
        receiverId,
        sentAt,
        text
    }).then((message) => {
        res.status(201).json({
            message: 'New message successfully created',
            new_message: message._id,
        })
    })
        .catch((err) => {
            res.status(400).json({
                message: 'Message could not be created',
                error: err.message,
            })
        })
});

// retrieve message (users or admins)

// all messages in the database:

router.route('/messages').get(/*userAuth,*/ async (req, res, next) => {
    try {
        const messages = await Message.find(); // fetch all messages
        res.status(200).json(messages); // array of messages in JSON response
    } catch (err) {
        res.status(500).json({ message: "An error occurred", error: err.message });
    }
});

// one message by ID:

router.route('/messages/:id').get(/*userAuth,*/ async (req, res, next) => {
    const messageId = req.params.id;
    try {
        const message = await Message.findById(messageId);
        if (message) {
            res.status(200).json(message);
        } else {
            res.status(404).json({ message: "Message not found" });
        }
    } catch (err) {
        res.status(500).json({ message: "An error occurred", error: err.message });
    }
});

// retrieve a list of all chats of a given user incl. latest message, sorted by latest message

router.route('/messages/chatlist/:id').get(/*userAuth,*/ async (req, res, next) => {
    const userId = req.params.id;
    try {
        const chats = await fetchUserChats(userId);
        chats.sort((a, b) => new Date(b.message.sentAt) - new Date(a.message.sentAt));
        res.status(200).json(chats);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred', error: err.message });
    }
});

async function fetchUserChats(userId) {
    // fetches user chats, populates it with username, sorts by DateTime
    const userObjectId = new mongoose.Types.ObjectId(userId);
    const chats = await Message.aggregate([
        {
            $match: {
                $or: [{ senderId: userObjectId }, { receiverId: userObjectId }]
            }
        },
        {
            $sort: { sentAt: -1 }
        },
        {
            $group: {
                _id: {
                    $cond: [{ $eq: ["$senderId", userObjectId] }, "$receiverId", "$senderId"]
                },
                latestMessage: { $first: "$$ROOT" }
            }
        },
        {
            $lookup: {
                from: 'users',
                localField: '_id',
                foreignField: '_id',
                as: 'userDetails'
            }
        },
        {
            $unwind: "$userDetails"
        },
        {
            $addFields: {
                "latestMessage.text": {
                    $cond: [{ $eq: ["$latestMessage.senderId", userObjectId] }, { $concat: ["You: ", "$latestMessage.text"] }, "$latestMessage.text"] // if it's ones own message, "You: " will be added in front of the string.
                }
            }
        },
        {
            $project: {
                _id: "$_id",
                username: "$userDetails.username",
                //image: "$userDetails.image",
                message: {
                    text: "$latestMessage.text",
                    sentAt: "$latestMessage.sentAt"
                }
            }
        },
    ]);

    return chats;
}


// retreive messages between 2 users in a chat

router.route('/messages/:senderId/:receiverId').get(/*userAuth,*/ async (req, res, next) => {
    try {
        const { senderId, receiverId } = req.params;
        const messages = await Message.find({
            $or: [
                { senderId: senderId, receiverId: receiverId },
                { senderId: receiverId, receiverId: senderId }
            ]
        }).populate('senderId', '_id username')
        res.status(200).json(messages)
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred', error: err.message });
    }
})


// update message
router.route('/messages/update/:id').put(/*userAuth,*/ async (req, res, next) => {
    const id = req.params.id;
    const updates = req.body;

    if (!id || !updates || Object.keys(updates).length === 0) {
        return res.status(400).json({
            message: 'Missing required fields or no updates provided'
        });
    }

    try {
        const message = await Message.findById(id);

        if (!message) {
            return res.status(404).json({ message: 'Message not found' });
        }

        // apply updates
        for (let key in updates) {
            if (message[key] !== undefined) { // ensure only existing fields are updated
                message[key] = updates[key];
            }
        }

        await message.save();
        res.status(200).json({ message: 'Update successful', updated_message: message.toObject() }); // Use 200 for successful updates
    } catch (error) {
        res.status(400).json({ message: 'An error occurred', error: error.message });
    }
});

// delete message (admin only)
router.route('/messages/delete/:id').delete(/*adminAuth,*/ async (req, res, next) => {
    const id = req.params.id;
    await Message.findByIdAndDelete(id)
        .then(message =>
            res.status(201).json({ message: 'Message successfully deleted', message })
        )
        .catch(error =>
            res.status(400).json({ message: 'An error occurred', error: error.message })
        )
});

module.exports = router;

/*

test message:
{
  "senderId": "user1",
  "receiverId": "user2",
  "sentAt": "2024-01-30T14:55:45.678Z",
  "text": "This is the first message ever on this app!"
}

*/