const express = require('express');
const router = express.Router();
const Skill = require('../models/skills');
const { adminAuth, userAuth } = require('../Auth/auth-middleware');

const cors = require('cors');
const app = express();
app.use(cors());

// create skill (admin only)
router.route('/skills/create').post(adminAuth, async (req, res, next) => {
    const { name, category } = req.body;
    await Skill.create({
        name,
        category,
    }).then((skill) => {
        res.status(201).json({
            message: 'New skill successfully created',
            skill: skill._id,
        })
    })
        .catch((err) => {
            res.status(400).json({
                message: 'Skill could not be created',
                error: err.message,
            })
        })
});

// retrieve skill (users or admins)

//all skills in the database:

router.route('/skills').get(/*userAuth,*/ async (req, res, next) => {
    try {
        const skills = await Skill.find(); // fetch all skills
        res.status(200).json(skills); // array of skills in JSON response
    } catch (err) {
        res.status(500).json({ message: "An error occurred", error: err.message });
    }
});

// one skill by ID:

router.route('/skills/:id').get(/*userAuth,*/ async (req, res, next) => {
    const skillId = req.params.id;
    try {
        const skill = await Skill.findById(skillId);
        if (skill) {
            res.status(200).json(skill);
        } else {
            res.status(404).json({ message: "Skill not found" });
        }
    } catch (err) {
        res.status(500).json({ message: "An error occurred", error: err.message });
    }
});

// update skill (admin only)
router.route('/skills/update/:id').put(adminAuth, async (req, res, next) => {
    const id = req.params.id;
    const updates = req.body;

    if (!id || !updates || Object.keys(updates).length === 0) {
        return res.status(400).json({
            message: 'Missing required fields or no updates provided'
        });
    }

    try {
        const skill = await Skill.findById(id);

        if (!skill) {
            return res.status(404).json({ message: 'Skill not found' });
        }

        // apply updates
        for (let key in updates) {
            if (skill[key] !== undefined) { // ensure only existing fields are updated
                skill[key] = updates[key];
            }
        }

        await skill.save();
        res.status(200).json({ message: 'Update successful', skill: skill.toObject() }); // Use 200 for successful updates
    } catch (error) {
        res.status(400).json({ message: 'An error occurred', error: error.message });
    }
});

// delete skill (admin only)
router.route('/skills/delete/:id').delete(adminAuth, async (req, res, next) => {
    const id = req.params.id;
    await Skill.findByIdAndDelete(id)
        .then(skill =>
            res.status(201).json({ message: 'Skill successfully deleted', skill })
        )
        .catch(error =>
            res.status(400).json({ message: 'An error occurred', error: error.message })
        )
});

module.exports = router;

/*

test skill:
{
  "name": "guitar",
  "category": "6605b12c182c4d32d87223ba"
}

*/