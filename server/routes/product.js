const router = require("express").Router();
const Product = require("../models/product");

///post request -- creat new product
router.post('/products', async (req, res) => {
    try {
        let product = new Product();
        product.title = req.body.title;
        product.description = req.body.description;
        product.photo = req.body.photo;
        product.stuckQuantity = req.body.stuckQuantity;

        await product.save();

        res.json({
            status: true,
            message: "product post OK ...!"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });

    }


});



module.exports = router;