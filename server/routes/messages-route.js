const express = require('express');
const router = express.Router();
const Message = require('../models/messages');
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

// update message (admin only)
router.route('/messages/update/:id').put(/*adminAuth,*/ async (req, res, next) => {
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