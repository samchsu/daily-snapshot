const router = require("express").Router();
const Category = require("../models/Category");
/*
// CREATE CATEGORY
/*
Body: name
*/
router.post("/", async (req, res) => {
    const newCat = new Category(req.body)
    try {
        const savedCat = await newCat.save()
        res.status(200).json(savedCat);
    } catch(err) {
        res.status(500).json(err)
    }
})

// FIND ALL POSTS UNDER SPECIFIED CATEGORY
/*
Body: name

router.get("/", async (req, res) => {
    try {
        const categories = await Category.find()
        res.status(200).json(categories);
    } catch(err) {
        res.status(500).json(err)
    }
})
*/
module.exports = router;