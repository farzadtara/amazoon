
const bodyParser = require('body-parser');
const express = require('express');
// const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();


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
        console.log("good");
    }
})


