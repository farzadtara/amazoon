const router = require("express").Router();
const Category = require("../models/category");
///post
router.post("/category", async (req, res) => {
    try {
        let category = new Category();
        category.title = req.body.title;

        await category.save();
        res.json({
            success: true,
            message: "category POST ...!"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});
///get

router.get("/category", async (req, res) => {
    try {
        let category = await Category.find();

        res.json({
            success: true,
            message: "GET OK ...!",
            cat: category

        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message

        });

    }
});

module.exports = router;