const express = require('express');
const router = express.Router();
const Category = require('../models/categories');
const { adminAuth, userAuth } = require('../Auth/auth-middleware');

const cors = require('cors');
const app = express();
app.use(cors());

// create category (admin only)
router.route('/categories/create').post(adminAuth, async (req, res, next) => {
    const { name } = req.body;
    await Category.create({
        name,
    }).then((category) => {
        res.status(201).json({
            message: 'New category successfully created',
            category: category._id,
        })
    })
        .catch((err) => {
            res.status(400).json({
                message: 'Category could not be created',
                error: err.message,
            })
        })
});

// retrieve category (users or admins)

//all categories in the database:

router.route('/categories').get(/*userAuth,*/ async (req, res, next) => {
    try {
        const categories = await Category.find(); // fetch all categories
        res.status(200).json(categories); // array of categories in JSON response
    } catch (err) {
        res.status(500).json({ message: "An error occurred", error: err.message });
    }
});

// one category by ID:

router.route('/categories/:id').get(/*userAuth,*/ async (req, res, next) => {
    const categoryId = req.params.id;
    try {
        const category = await Category.findById(categoryId);
        if (category) {
            res.status(200).json(category);
        } else {
            res.status(404).json({ message: "Category not found" });
        }
    } catch (err) {
        res.status(500).json({ message: "An error occurred", error: err.message });
    }
});

// update category (admin only)
router.route('/categories/update/:id').put(adminAuth, async (req, res, next) => {
    const id = req.params.id;
    const updates = req.body;

    if (!id || !updates || Object.keys(updates).length === 0) {
        return res.status(400).json({
            message: 'Missing required fields or no updates provided'
        });
    }

    try {
        const category = await Category.findById(id);

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        // apply updates
        for (let key in updates) {
            if (category[key] !== undefined) { // ensure only existing fields are updated
                category[key] = updates[key];
            }
        }

        await category.save();
        res.status(200).json({ message: 'Update successful', category: category.toObject() }); // Use 200 for successful updates
    } catch (error) {
        res.status(400).json({ message: 'An error occurred', error: error.message });
    }
});

// delete category (admin only)
router.route('/categories/delete/:id').delete(adminAuth, async (req, res, next) => {
    const id = req.params.id;
    await Category.findByIdAndDelete(id)
        .then(category =>
            res.status(201).json({ message: 'Category successfully deleted', category })
        )
        .catch(error =>
            res.status(400).json({ message: 'An error occurred', error: error.message })
        )
});

module.exports = router;

/*

test category:
{
  "name": "Business Skills"
}

*/