
const bodyParser = require('body-parser');
const express = require('express');
const { Mongoose } = require('mongoose');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const User = require('./models/user.js');

const app = express();
dotenv.config();

mongoose.connect(process.env.database,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("DB OK ... !");
        }
    });


///middelwares
app.use(cors());
app.use(morgan());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


///require APIs

const ProductRouter = require("./routes/product");
const CategoryRouter = require("./routes/category");
const ownerRouter = require('./routes/owner');
app.use("/api", ProductRouter);
app.use("/api", CategoryRouter);
app.use("/api", ownerRouter);





app.listen(1375, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("SERVER OK ... !");
    }
})


