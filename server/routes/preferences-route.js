// this is no longer used, instead the users preference is written directly in the user data

/*
const express = require('express');
const router = express.Router();
const Preference = require('../models/preferences');
const { adminAuth, userAuth } = require('../Auth/auth-middleware');

const cors = require('cors');
const app = express();
app.use(cors());

//create preference (admin only)
router.route('/preferences/create').post(adminAuth, async (req, res, next) => {
    const { name } = req.body;
    await Preference.create({
        name,
    }).then((preference) => {
        res.status(201).json({
            message: 'New preference successfully created',
            preference: preference._id,
        })
    })
        .catch((err) => {
            res.status(400).json({
                message: 'Preference could not be created',
                error: err.message,
            })
        })
});

// retrieve preference (users or admins)
router.route('/preferences/:id').get(userAuth, async (req, res, next) => {
    const preferenceId = req.params.id;
    try {
        const preference = await Preference.findById(preferenceId);
        if (preference) {
            res.status(200).json(preference);
        } else {
            res.status(404).json({ message: "Preference not found" });
        }
    } catch (err) {
        res.status(500).json({ message: "An error occurred", error: err.message });
    }
});

// update preference (admin only)
router.route('/preferences/update/:id').put(adminAuth, async (req, res, next) => {
    const id = req.params.id;
    const updates = req.body;

    if (!id || !updates || Object.keys(updates).length === 0) {
        return res.status(400).json({
            message: 'Missing required fields or no updates provided'
        });
    }

    try {
        const preference = await Preference.findById(id);

        if (!preference) {
            return res.status(404).json({ message: 'Preference not found' });
        }

        // apply updates
        for (let key in updates) {
            if (preference[key] !== undefined) { // ensure only existing fields are updated
                preference[key] = updates[key];
            }
        }

        await preference.save();
        res.status(200).json({ message: 'Update successful', preference: preference.toObject() }); // Use 200 for successful updates
    } catch (error) {
        res.status(400).json({ message: 'An error occurred', error: error.message });
    }
});

// delete preference (admin only)
router.route('/preferences/delete/:id').delete(adminAuth, async (req, res, next) => {
    const id = req.params.id;
    await Preference.findByIdAndDelete(id)
        .then(preference =>
            res.status(201).json({ message: 'Preference successfully deleted', preference })
        )
        .catch(error =>
            res.status(400).json({ message: 'An error occurred', error: error.message })
        )
});

module.exports = router;

*/
/*

test preference:
{
  "name": "in-person"
}

*/