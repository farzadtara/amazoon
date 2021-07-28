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

// GET ALL PRODUCTS 

router.get("/products", async (req, res) => {
    try {
        let products = await Product.find();

        res.json({
            success: true,
            products: products
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });

    }
});

// GET ONE PRODUCT
router.get("/product/:id", async (req, res) => {
    try {
        let product = await Product.findOne({ _id: req.params.id });
        res.json({
            success: true,
            product: product
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });

    }

});

// PUT UPDATE PRODUCT

router.put("/product/:id", async (req, res) => {
    try {
        let product = await Product.findOneAndUpdate({ _id: req.params.id },
            {
                $set: {
                    title: req.body.title,
                    price: req.body.price,
                    description: req.body.description,
                    photo: req.body.photo,
                    category: req.body.category,
                    owner: req.body.owner
                }
            },
            { upsert: true });

        res.json({
            success: true,
            product: product
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message

        }
        );
    }
});

///     DELETE PRODUCT

router.delete("/product/:id", async (req, res) => {
    try {
        let Deletedproduct = await Product.findOneAndDelete({ _id: req.params.id });
        if (Deletedproduct) {
            res.json({
                success: true,
                Deletedproduct: "Deletedproduct"
            });
        }

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});








module.exports = router;