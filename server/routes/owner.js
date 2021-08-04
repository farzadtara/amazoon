const router = require("express").Router();
const Owner = require('../models/owner');

///post - creat

router.post("/owner", async (req, res) => {
    try {
        let owner = new Owner();
        owner.name = req.body.name;
        owner.about = req.body.about;

        await owner.save();

        res.json({
            success: true,
            message: "owner post ok ...!"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

///get 

router.get("/owner", async (req, res) => {
    try {
        let owner = await Owner.find();

        res.json({
            success: true,
            owner: owner
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });

    }
});

module.exports = router;