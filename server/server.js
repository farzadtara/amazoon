
const bodyParser = require('body-parser');
const express = require('express');
const { Mongoose } = require('mongoose');
// const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

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
app.use(morgan('div'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


///app

app.get('/', (req, res) => {
    res.json("hollow amanzoon");
});

app.post('/', (req, res) => {
    console.log(req.body);
});




app.listen(1375, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("SERVER OK ... !");
    }
})


